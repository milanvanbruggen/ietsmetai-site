'use client';

import { useState, useEffect } from 'react';
import { Eye, EyeOff, GripVertical, Save, Lock, Check, X } from 'lucide-react';

interface Project {
  id: number;
  name: string;
  description: string | null;
  language: string | null;
  visible: boolean;
  order: number;
  isPrivate?: boolean;
}

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  language: string | null;
  isPrivate?: boolean;
}

export default function AdminProjectsPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [projects, setProjects] = useState<Project[]>([]);
  const [githubRepos, setGithubRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saveStatus, setSaveStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Fetch GitHub repos and saved projects
  useEffect(() => {
    if (isAuthenticated) {
      fetchData();
    }
  }, [isAuthenticated]);

  const fetchData = async () => {
    setLoading(true);
    try {
      // Fetch GitHub repos
      const githubRes = await fetch('/api/projects/github');
      const githubData = await githubRes.json();
      setGithubRepos(githubData);

      // Fetch saved projects
      const projectsRes = await fetch('/api/projects');
      const savedProjects = await projectsRes.json();

      // Merge: keep saved project settings, add new repos
      const mergedProjects: Project[] = githubData.map((repo: GitHubRepo, index: number) => {
        const existing = savedProjects.find((p: Project) => p.id === repo.id);
        return {
          id: repo.id,
          name: repo.name,
          description: repo.description,
          language: repo.language,
          isPrivate: repo.isPrivate,
          visible: existing?.visible || false,
          order: existing?.order ?? index,
        };
      });

      // Sort by order
      mergedProjects.sort((a, b) => a.order - b.order);
      setProjects(mergedProjects);
    } catch (err) {
      console.error('Failed to fetch data:', err);
    }
    setLoading(false);
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setPasswordError('');
    
    // Test the password by trying to save (empty won't change anything)
    try {
      const res = await fetch('/api/projects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password, projects: [] }),
      });
      
      if (res.ok) {
        setIsAuthenticated(true);
        localStorage.setItem('admin_session', password);
      } else {
        setPasswordError('Onjuist wachtwoord');
      }
    } catch {
      setPasswordError('Er ging iets mis');
    }
  };

  // Check for saved session
  useEffect(() => {
    const savedSession = localStorage.getItem('admin_session');
    if (savedSession) {
      setPassword(savedSession);
      setIsAuthenticated(true);
    }
  }, []);

  const toggleVisibility = (id: number) => {
    setProjects(projects.map(p => 
      p.id === id ? { ...p, visible: !p.visible } : p
    ));
    setSaveStatus('idle');
  };

  const moveProject = (index: number, direction: 'up' | 'down') => {
    const newProjects = [...projects];
    const newIndex = direction === 'up' ? index - 1 : index + 1;
    
    if (newIndex < 0 || newIndex >= projects.length) return;
    
    [newProjects[index], newProjects[newIndex]] = [newProjects[newIndex], newProjects[index]];
    
    // Update order values
    newProjects.forEach((p, i) => {
      p.order = i;
    });
    
    setProjects(newProjects);
    setSaveStatus('idle');
  };

  const saveProjects = async () => {
    setSaving(true);
    setSaveStatus('idle');
    
    try {
      const res = await fetch('/api/projects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password, projects }),
      });
      
      if (res.ok) {
        setSaveStatus('success');
        setTimeout(() => setSaveStatus('idle'), 3000);
      } else {
        setSaveStatus('error');
      }
    } catch {
      setSaveStatus('error');
    }
    
    setSaving(false);
  };

  const logout = () => {
    localStorage.removeItem('admin_session');
    setIsAuthenticated(false);
    setPassword('');
  };

  // Login screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center p-4">
        <div className="bg-white dark:bg-black p-8 rounded-2xl shadow-lg max-w-md w-full border border-gray-200 dark:border-gray-800">
          <div className="flex items-center gap-3 mb-6">
            <Lock className="w-6 h-6 text-[#9BCBFF]" />
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Admin Login</h1>
          </div>
          
          <form onSubmit={handleLogin}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Wachtwoord"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white mb-4 focus:outline-none focus:ring-2 focus:ring-[#9BCBFF]"
            />
            
            {passwordError && (
              <p className="text-red-500 text-sm mb-4">{passwordError}</p>
            )}
            
            <button
              type="submit"
              className="w-full px-4 py-3 bg-[#9BCBFF] text-gray-900 rounded-xl font-semibold hover:brightness-105 transition-all"
            >
              Inloggen
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 pb-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Projecten Beheren
          </h1>
          <div className="flex items-center gap-4">
            <button
              onClick={saveProjects}
              disabled={saving}
              className={`inline-flex items-center gap-2 px-6 py-2 rounded-full font-semibold transition-all ${
                saveStatus === 'success'
                  ? 'bg-[#9AD9A0] text-white'
                  : saveStatus === 'error'
                  ? 'bg-red-500 text-white'
                  : 'bg-[#9BCBFF] text-gray-900 hover:brightness-105'
              }`}
            >
              {saveStatus === 'success' ? (
                <>
                  <Check className="w-5 h-5" />
                  Opgeslagen
                </>
              ) : saveStatus === 'error' ? (
                <>
                  <X className="w-5 h-5" />
                  Fout
                </>
              ) : (
                <>
                  <Save className="w-5 h-5" />
                  {saving ? 'Opslaan...' : 'Opslaan'}
                </>
              )}
            </button>
            <button
              onClick={logout}
              className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
            >
              Uitloggen
            </button>
          </div>
        </div>

        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Selecteer welke projecten je wilt tonen op de Over mij pagina. Sleep om de volgorde aan te passen.
        </p>

        {loading ? (
          <div className="text-center py-12 text-gray-500">Laden...</div>
        ) : (
          <div className="space-y-3">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`bg-white dark:bg-black p-4 rounded-xl border transition-all ${
                  project.visible
                    ? 'border-[#9AD9A0] shadow-md'
                    : 'border-gray-200 dark:border-gray-800 opacity-60'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="flex flex-col gap-1">
                    <button
                      onClick={() => moveProject(index, 'up')}
                      disabled={index === 0}
                      className="text-gray-400 hover:text-gray-600 disabled:opacity-30"
                    >
                      <GripVertical className="w-5 h-5 rotate-180" />
                    </button>
                    <button
                      onClick={() => moveProject(index, 'down')}
                      disabled={index === projects.length - 1}
                      className="text-gray-400 hover:text-gray-600 disabled:opacity-30"
                    >
                      <GripVertical className="w-5 h-5" />
                    </button>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        {project.name}
                      </h3>
                      {project.isPrivate && (
                        <span className="text-xs px-2 py-0.5 bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full">
                          private
                        </span>
                      )}
                    </div>
                    {project.description && (
                      <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-1">
                        {project.description}
                      </p>
                    )}
                    {project.language && (
                      <span className="text-xs text-gray-500 dark:text-gray-500">
                        {project.language}
                      </span>
                    )}
                  </div>
                  
                  <button
                    onClick={() => toggleVisibility(project.id)}
                    className={`p-2 rounded-lg transition-all ${
                      project.visible
                        ? 'bg-[#9AD9A0]/20 text-[#9AD9A0]'
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-400'
                    }`}
                  >
                    {project.visible ? (
                      <Eye className="w-5 h-5" />
                    ) : (
                      <EyeOff className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-8 p-4 bg-gray-100 dark:bg-gray-800 rounded-xl">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            <strong>Tip:</strong> Projecten worden opgeslagen in <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">data/projects.json</code>. 
            Vergeet niet om wijzigingen op te slaan en te committen naar Git als je wilt dat ze live komen.
          </p>
        </div>
      </div>
    </div>
  );
}

