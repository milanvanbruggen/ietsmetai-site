import { Github, Star, GitFork, ExternalLink } from 'lucide-react';

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  updated_at: string;
  topics: string[];
}

async function getGitHubRepos(): Promise<GitHubRepo[]> {
  try {
    const res = await fetch(
      'https://api.github.com/users/milanvanbruggen/repos?sort=updated&per_page=6&type=public',
      {
        headers: {
          Accept: 'application/vnd.github.v3+json',
        },
        next: { revalidate: 3600 }, // Revalidate every hour
      }
    );

    if (!res.ok) {
      return [];
    }

    const repos: GitHubRepo[] = await res.json();
    // Filter out forks and sort by most recently updated
    return repos
      .filter((repo) => !repo.name.includes('.github'))
      .slice(0, 6);
  } catch {
    return [];
  }
}

const languageColors: Record<string, string> = {
  TypeScript: '#3178c6',
  JavaScript: '#f7df1e',
  Python: '#3776ab',
  HTML: '#e34f26',
  CSS: '#1572b6',
  Vue: '#4fc08d',
  React: '#61dafb',
  Swift: '#fa7343',
  Kotlin: '#7f52ff',
  Go: '#00add8',
  Rust: '#dea584',
  PHP: '#777bb4',
};

export default async function GitHubProjects() {
  const repos = await getGitHubRepos();

  if (repos.length === 0) {
    return null;
  }

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <Github className="w-8 h-8 text-gray-900 dark:text-white" />
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Waar ik aan werk
          </h2>
        </div>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl">
          Een selectie van mijn recente publieke projecten op GitHub. Van experimenten met AI tot tools die ik zelf gebruik.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.map((repo) => (
            <a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white dark:bg-black p-6 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-[#9BCBFF] dark:hover:border-[#9BCBFF] transition-all hover:shadow-lg"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-[#5BA3F5] transition-colors">
                  {repo.name}
                </h3>
                <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-[#5BA3F5] transition-colors" />
              </div>

              {repo.description && (
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                  {repo.description}
                </p>
              )}

              <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-500">
                {repo.language && (
                  <div className="flex items-center gap-1.5">
                    <span
                      className="w-3 h-3 rounded-full"
                      style={{
                        backgroundColor: languageColors[repo.language] || '#6b7280',
                      }}
                    />
                    <span>{repo.language}</span>
                  </div>
                )}

                {repo.stargazers_count > 0 && (
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    <span>{repo.stargazers_count}</span>
                  </div>
                )}

                {repo.forks_count > 0 && (
                  <div className="flex items-center gap-1">
                    <GitFork className="w-4 h-4" />
                    <span>{repo.forks_count}</span>
                  </div>
                )}
              </div>
            </a>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href="https://github.com/milanvanbruggen"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-[#5BA3F5] dark:hover:text-[#5BA3F5] transition-colors"
          >
            <Github className="w-5 h-5" />
            Bekijk alle projecten op GitHub
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

