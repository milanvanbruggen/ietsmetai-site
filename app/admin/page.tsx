'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Lock, FolderGit2, Briefcase, Quote, ChevronRight, LogOut } from 'lucide-react';

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  // Check for saved session on mount
  useEffect(() => {
    const savedSession = localStorage.getItem('admin_session');
    if (savedSession) {
      setPassword(savedSession);
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setPasswordError('');
    
    try {
      // Test the password by trying to access an admin endpoint
      const res = await fetch('/api/projects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password: password.trim(), projects: [] }),
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

  const logout = () => {
    localStorage.removeItem('admin_session');
    setIsAuthenticated(false);
    setPassword('');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-gray-500">Laden...</div>
      </div>
    );
  }

  // Login screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center p-4">
        <div className="bg-white dark:bg-black p-8 rounded-2xl shadow-lg max-w-md w-full border border-gray-200 dark:border-gray-800">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-blue-pastel/10">
              <Lock className="w-6 h-6 text-blue-pastel" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Admin</h1>
              <p className="text-sm text-gray-500 dark:text-gray-400">Log in om verder te gaan</p>
            </div>
          </div>
          
          <form onSubmit={handleLogin}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Wachtwoord"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white mb-4 focus:outline-none focus:ring-2 focus:ring-blue-pastel"
              autoFocus
            />
            
            {passwordError && (
              <p className="text-red-500 text-sm mb-4">{passwordError}</p>
            )}
            
            <button
              type="submit"
              className="w-full px-4 py-3 bg-blue-pastel text-gray-900 rounded-xl font-semibold hover:brightness-105 transition-all"
            >
              Inloggen
            </button>
          </form>
        </div>
      </div>
    );
  }

  // Dashboard
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Admin Dashboard
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              Beheer de inhoud van je website
            </p>
          </div>
          <button
            onClick={logout}
            className="inline-flex items-center gap-2 px-4 py-2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
          >
            <LogOut className="w-5 h-5" />
            Uitloggen
          </button>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {/* Projects Card */}
          <Link
            href="/admin/projects"
            className="group bg-white dark:bg-black p-6 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-blue-pastel dark:hover:border-blue-pastel transition-all hover:shadow-lg"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-blue-pastel/10 group-hover:bg-blue-pastel/20 transition-colors">
                <FolderGit2 className="w-8 h-8 text-blue-pastel" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Projecten
                  </h2>
                  <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-pastel group-hover:translate-x-1 transition-all" />
                </div>
                <p className="text-gray-600 dark:text-gray-400 mt-1 text-sm">
                  Beheer welke GitHub projecten zichtbaar zijn op de website
                </p>
              </div>
            </div>
          </Link>

          {/* Roles Card */}
          <Link
            href="/admin/roles"
            className="group bg-white dark:bg-black p-6 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-orange-pastel dark:hover:border-orange-pastel transition-all hover:shadow-lg"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-orange-pastel/10 group-hover:bg-orange-pastel/20 transition-colors">
                <Briefcase className="w-8 h-8 text-orange-pastel" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Functies
                  </h2>
                  <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-orange-pastel group-hover:translate-x-1 transition-all" />
                </div>
                <p className="text-gray-600 dark:text-gray-400 mt-1 text-sm">
                  Beheer je huidige functies en nevenactiviteiten
                </p>
              </div>
            </div>
          </Link>

          {/* Testimonials Card */}
          <Link
            href="/admin/testimonials"
            className="group bg-white dark:bg-black p-6 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-green-pastel dark:hover:border-green-pastel transition-all hover:shadow-lg"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-green-pastel/10 group-hover:bg-green-pastel/20 transition-colors">
                <Quote className="w-8 h-8 text-green-pastel" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Testimonials
                  </h2>
                  <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-green-pastel group-hover:translate-x-1 transition-all" />
                </div>
                <p className="text-gray-600 dark:text-gray-400 mt-1 text-sm">
                  Beheer testimonials van opdrachtgevers
                </p>
              </div>
            </div>
          </Link>
        </div>

        <div className="mt-8 p-4 bg-gray-100 dark:bg-gray-800 rounded-xl">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            <strong>Let op:</strong> Wijzigingen worden opgeslagen in <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">data/</code> bestanden. 
            Vergeet niet om wijzigingen te committen naar Git als je wilt dat ze live komen op de website.
          </p>
        </div>
      </div>
    </div>
  );
}

