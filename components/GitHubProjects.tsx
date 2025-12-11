import { Github } from 'lucide-react';

interface Project {
  id: number;
  name: string;
  description: string | null;
  language: string | null;
  visible: boolean;
  order: number;
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

async function getProjects(): Promise<Project[]> {
  try {
    // Use the API route which reads from Edge Config in production
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    const res = await fetch(`${baseUrl}/api/projects`, {
      cache: 'no-store', // Always get fresh data
    });

    if (!res.ok) {
      console.error('Failed to fetch projects:', res.status);
      return [];
    }

    const projects: Project[] = await res.json();

    // API already returns only visible projects, sorted by order
    return projects;
  } catch (error) {
    console.error('Error fetching projects:', error);
    return [];
  }
}

export default async function GitHubProjects() {
  const projects = await getProjects();

  if (projects.length === 0) {
    return null;
  }

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Waar ik aan werk
          </h2>
        </div>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl">
          Een selectie van projecten waar ik aan werk. Van experimenten met AI tot tools die ik zelf gebruik.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-black p-6 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm"
            >
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                {project.name}
              </h3>

              {project.description && (
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
              )}

              {project.language && (
                <div className="flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-500">
                  <span
                    className="w-3 h-3 rounded-full"
                    style={{
                      backgroundColor: languageColors[project.language] || '#6b7280',
                    }}
                  />
                  <span>{project.language}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
