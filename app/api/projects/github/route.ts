import { NextResponse } from 'next/server';

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  language: string | null;
  updated_at: string;
  private: boolean;
}

// GET: Fetch ALL repos from GitHub for admin selection (including private with token)
export async function GET() {
  try {
    const allRepos: GitHubRepo[] = [];
    let page = 1;
    let hasMore = true;
    
    const githubToken = process.env.GITHUB_TOKEN;
    
    // Use authenticated endpoint if token is available
    const baseUrl = githubToken 
      ? 'https://api.github.com/user/repos' // Authenticated: includes private repos
      : 'https://api.github.com/users/milanvanbruggen/repos'; // Public only

    // Fetch all pages
    while (hasMore) {
      const res = await fetch(
        `${baseUrl}?sort=updated&per_page=100&page=${page}&affiliation=owner`,
        {
          headers: {
            Accept: 'application/vnd.github.v3+json',
            ...(githubToken && { Authorization: `Bearer ${githubToken}` }),
          },
          next: { revalidate: 60 }, // Cache for 1 minute
        }
      );

      if (!res.ok) {
        console.error('GitHub API error:', res.status, await res.text());
        break;
      }

      const repos: GitHubRepo[] = await res.json();
      
      if (repos.length === 0) {
        hasMore = false;
      } else {
        allRepos.push(...repos);
        page++;
        
        // Safety limit to prevent infinite loops
        if (page > 10) {
          hasMore = false;
        }
      }
    }

    // Filter out .github repos and map to simpler format
    const filteredRepos = allRepos
      .filter((repo) => !repo.name.includes('.github'))
      .map((repo) => ({
        id: repo.id,
        name: repo.name,
        description: repo.description,
        language: repo.language,
        isPrivate: repo.private,
      }));

    return NextResponse.json(filteredRepos);
  } catch (error) {
    console.error('Failed to fetch repos:', error);
    return NextResponse.json({ error: 'Failed to fetch repos' }, { status: 500 });
  }
}
