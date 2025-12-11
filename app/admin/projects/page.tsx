'use client';

import { useState, useEffect } from 'react';
import { Eye, EyeOff, GripVertical, Save, Check, X, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { ImportExportButtons } from '@/components/admin/ImportExportButtons';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

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

interface SortableProjectCardProps {
  project: Project;
  onToggleVisibility: (id: number) => void;
}

function SortableProjectCard({ project, onToggleVisibility }: SortableProjectCardProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: project.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
    zIndex: isDragging ? 1000 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`bg-white dark:bg-black p-4 rounded-xl border transition-all ${
        project.visible
          ? 'border-green-pastel shadow-md'
          : 'border-gray-200 dark:border-gray-800 opacity-60'
      } ${isDragging ? 'shadow-2xl ring-2 ring-blue-pastel' : ''}`}
    >
      <div className="flex items-center gap-4">
        {/* Drag handle */}
        <div
          {...attributes}
          {...listeners}
          className="cursor-grab active:cursor-grabbing p-2 -m-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 touch-none"
        >
          <GripVertical className="w-5 h-5" />
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
          onClick={() => onToggleVisibility(project.id)}
          className={`p-2 rounded-lg transition-all ${
            project.visible
              ? 'bg-green-pastel/20 text-green-pastel'
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
  );
}

export default function AdminProjectsPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saveStatus, setSaveStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  // Check for saved session
  useEffect(() => {
    const savedSession = localStorage.getItem('admin_session');
    if (savedSession) {
      setPassword(savedSession);
      setIsAuthenticated(true);
    }
  }, []);

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

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      setProjects((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);

        const newItems = arrayMove(items, oldIndex, newIndex);
        // Update order values
        newItems.forEach((item, index) => {
          item.order = index;
        });
        return newItems;
      });
      setSaveStatus('idle');
    }
  };

  const toggleVisibility = (id: number) => {
    setProjects(projects.map(p => 
      p.id === id ? { ...p, visible: !p.visible } : p
    ));
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

  const handleImport = (importedData: Project[], mode: 'replace' | 'append') => {
    if (mode === 'replace') {
      // Replace all projects with imported data, re-assign order
      const reorderedData = importedData.map((p, index) => ({
        ...p,
        order: index,
      }));
      setProjects(reorderedData);
    } else {
      // Append imported data to existing projects
      const maxOrder = projects.length > 0 ? Math.max(...projects.map(p => p.order)) : -1;
      const newProjects = importedData.map((p, index) => ({
        ...p,
        id: Date.now() + index, // Generate new IDs to avoid conflicts
        order: maxOrder + index + 1,
      }));
      setProjects([...projects, ...newProjects]);
    }
    setSaveStatus('idle');
  };

  // Redirect to main admin if not authenticated
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center p-4">
        <div className="text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-4">Je bent niet ingelogd.</p>
          <Link 
            href="/admin"
            className="text-blue-pastel hover:underline"
          >
            Ga naar login
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-16">
      <div className="max-w-4xl mx-auto px-4 py-12 sm:py-16 lg:py-20">
        <div className="mb-6">
          <Link 
            href="/admin"
            className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Terug naar Admin
          </Link>
        </div>

        <div className="mb-10">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Projecten Beheren
          </h1>
          <div className="flex items-center justify-between flex-wrap gap-4">
            <ImportExportButtons
              data={projects}
              contentType="projects"
              onImport={handleImport}
            />
            <button
              onClick={saveProjects}
              disabled={saving}
              className={`inline-flex items-center gap-2 px-6 py-2 rounded-full font-semibold transition-all ${
                saveStatus === 'success'
                  ? 'bg-green-pastel text-white'
                  : saveStatus === 'error'
                  ? 'bg-red-500 text-white'
                  : 'bg-blue-pastel text-gray-900 hover:brightness-105'
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
          </div>
        </div>

        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Selecteer welke projecten je wilt tonen op de Over mij pagina. Sleep om de volgorde aan te passen.
        </p>

        {loading ? (
          <div className="text-center py-12 text-gray-500">Laden...</div>
        ) : (
          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
          >
            <SortableContext
              items={projects.map(p => p.id)}
              strategy={verticalListSortingStrategy}
            >
              <div className="space-y-3">
                {projects.map((project) => (
                  <SortableProjectCard
                    key={project.id}
                    project={project}
                    onToggleVisibility={toggleVisibility}
                  />
                ))}
              </div>
            </SortableContext>
          </DndContext>
        )}
      </div>
    </div>
  );
}
