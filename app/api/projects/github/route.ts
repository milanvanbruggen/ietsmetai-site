import { NextResponse } from 'next/server';

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  language: string | null;
  updated_at: string;
}

// GET: Fetch ALL repos from GitHub for admin selection (with pagination)
export async function GET() {
  try {
    const allRepos: GitHubRepo[] = [];
    let page = 1;
    let hasMore = true;

    // Fetch all pages
    while (hasMore) {
      const res = await fetch(
        `https://api.github.com/users/milanvanbruggen/repos?sort=updated&per_page=100&page=${page}&type=public`,
        {
          headers: {
            Accept: 'application/vnd.github.v3+json',
          },
          next: { revalidate: 60 }, // Cache for 1 minute
        }
      );

      if (!res.ok) {
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
      }));

    return NextResponse.json(filteredRepos);
  } catch {
    return NextResponse.json({ error: 'Failed to fetch repos' }, { status: 500 });
  }
}
