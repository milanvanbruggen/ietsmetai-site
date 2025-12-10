import { NextResponse } from 'next/server';

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  language: string | null;
  updated_at: string;
}

// GET: Fetch all repos from GitHub for admin selection
export async function GET() {
  try {
    const res = await fetch(
      'https://api.github.com/users/milanvanbruggen/repos?sort=updated&per_page=100&type=public',
      {
        headers: {
          Accept: 'application/vnd.github.v3+json',
        },
        next: { revalidate: 60 }, // Cache for 1 minute
      }
    );

    if (!res.ok) {
      return NextResponse.json({ error: 'Failed to fetch repos' }, { status: 500 });
    }

    const repos: GitHubRepo[] = await res.json();
    
    // Filter out .github repos and map to simpler format
    const filteredRepos = repos
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

