'use client';

import { useState, useEffect } from 'react';
import { Eye, EyeOff, Save, Plus, Trash2, Check, X, ArrowLeft, User, GripVertical, Link as LinkIcon } from 'lucide-react';
import Link from 'next/link';
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

interface Role {
  id: number;
  title: string;
  organization: string;
  description: string;
  clientName: string | null;
  clientPhoto: string | null;
  startDate: string;
  endDate: string | null;
  visible: boolean;
  order: number;
}

interface SortableRoleCardProps {
  role: Role;
  onToggleVisibility: (id: number) => void;
  onDelete: (id: number) => void;
  onEdit: (role: Role) => void;
}

function SortableRoleCard({ role, onToggleVisibility, onDelete, onEdit }: SortableRoleCardProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: role.id });

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
        role.visible
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

        {/* Client photo or placeholder */}
        <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-100 dark:bg-gray-800 flex-shrink-0">
          {role.clientPhoto ? (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              src={role.clientPhoto}
              alt={role.clientName || 'Client'}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <User className="w-6 h-6 text-gray-400" />
            </div>
          )}
        </div>
        
        <div className="flex-1 cursor-pointer" onClick={() => onEdit(role)}>
          <h3 className="font-semibold text-gray-900 dark:text-white">
            {role.title || 'Geen titel'}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {role.organization}
            {role.clientName && (
              <span className="text-gray-500"> · {role.clientName}</span>
            )}
          </p>
          <p className="text-xs text-gray-500">
            {role.startDate} - {role.endDate || 'heden'}
          </p>
        </div>
        
        <div className="flex items-center gap-2">
          <button
            onClick={() => onToggleVisibility(role.id)}
            className={`p-2 rounded-lg transition-all ${
              role.visible
                ? 'bg-green-pastel/20 text-green-pastel'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-400'
            }`}
          >
            {role.visible ? (
              <Eye className="w-5 h-5" />
            ) : (
              <EyeOff className="w-5 h-5" />
            )}
          </button>
          <button
            onClick={() => onDelete(role.id)}
            className="p-2 rounded-lg bg-red-500/10 text-red-500 hover:bg-red-500/20"
          >
            <Trash2 className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function AdminRolesPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [roles, setRoles] = useState<Role[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saveStatus, setSaveStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [editingRole, setEditingRole] = useState<Role | null>(null);
  const [isAddingNew, setIsAddingNew] = useState(false);

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

  // Fetch roles when authenticated
  useEffect(() => {
    if (isAuthenticated) {
      fetchRoles();
    }
  }, [isAuthenticated]);

  // Handle Escape key to close modal
  useEffect(() => {
    if (!editingRole) return;
    
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        cancelEditing();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [editingRole]);

  const fetchRoles = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/roles/all');
      const data = await res.json();
      setRoles(data);
    } catch (err) {
      console.error('Failed to fetch roles:', err);
    }
    setLoading(false);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      setRoles((items) => {
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
    setRoles(roles.map(r => 
      r.id === id ? { ...r, visible: !r.visible } : r
    ));
    setSaveStatus('idle');
  };

  const saveRoles = async () => {
    setSaving(true);
    setSaveStatus('idle');
    
    try {
      const res = await fetch('/api/roles', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password, roles }),
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

  const deleteRole = (id: number) => {
    setRoles(roles.filter(r => r.id !== id));
    setSaveStatus('idle');
  };

  const addNewRole = () => {
    const newRole: Role = {
      id: Date.now(),
      title: '',
      organization: '',
      description: '',
      clientName: null,
      clientPhoto: null,
      startDate: new Date().toISOString().slice(0, 7),
      endDate: null,
      visible: true,
      order: roles.length,
    };
    setEditingRole(newRole);
    setIsAddingNew(true);
  };

  const saveEditingRole = () => {
    if (!editingRole) return;
    
    if (isAddingNew) {
      setRoles([...roles, editingRole]);
    } else {
      setRoles(roles.map(r => r.id === editingRole.id ? editingRole : r));
    }
    
    setEditingRole(null);
    setIsAddingNew(false);
    setSaveStatus('idle');
  };

  const cancelEditing = () => {
    setEditingRole(null);
    setIsAddingNew(false);
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

        <div className="flex items-center justify-between mb-10">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Functies Beheren
          </h1>
          <div className="flex items-center gap-4">
            <button
              onClick={addNewRole}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-full font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition-all"
            >
              <Plus className="w-5 h-5" />
              Toevoegen
            </button>
            <button
              onClick={saveRoles}
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
          Beheer je huidige functies en opdrachten. Sleep om de volgorde aan te passen.
        </p>

        {/* Edit Modal */}
        {editingRole && (
          <div 
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            onClick={(e) => {
              // Close modal if clicking on the overlay (not the modal content)
              if (e.target === e.currentTarget) {
                cancelEditing();
              }
            }}
          >
            <div 
              className="bg-white dark:bg-gray-900 p-6 rounded-2xl max-w-lg w-full border border-gray-200 dark:border-gray-700 max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {isAddingNew ? 'Nieuwe functie toevoegen' : 'Functie bewerken'}
              </h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Titel
                  </label>
                  <input
                    type="text"
                    value={editingRole.title}
                    onChange={(e) => setEditingRole({ ...editingRole, title: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    placeholder="Bijv. AI Adviseur"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Organisatie
                  </label>
                  <input
                    type="text"
                    value={editingRole.organization}
                    onChange={(e) => setEditingRole({ ...editingRole, organization: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    placeholder="Bijv. Bedrijfsnaam of Freelance"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Beschrijving
                  </label>
                  <textarea
                    value={editingRole.description}
                    onChange={(e) => setEditingRole({ ...editingRole, description: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    rows={2}
                    placeholder="Korte beschrijving van de functie"
                  />
                </div>

                <div className="border-t border-gray-200 dark:border-gray-700 pt-4 mt-4">
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                    Opdrachtgever (optioneel)
                  </p>
                  
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm text-gray-600 dark:text-gray-400 mb-1">
                        Naam opdrachtgever
                      </label>
                      <input
                        type="text"
                        value={editingRole.clientName || ''}
                        onChange={(e) => setEditingRole({ ...editingRole, clientName: e.target.value || null })}
                        className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                        placeholder="Bijv. Jan Jansen"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm text-gray-600 dark:text-gray-400 mb-1">
                        <span className="flex items-center gap-2">
                          <LinkIcon className="w-3 h-3" />
                          Foto URL opdrachtgever
                        </span>
                      </label>
                      <input
                        type="text"
                        value={editingRole.clientPhoto || ''}
                        onChange={(e) => setEditingRole({ ...editingRole, clientPhoto: e.target.value || null })}
                        className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                        placeholder="https://... of /images/..."
                      />
                      <p className="text-xs text-gray-500 mt-1">
                        Tip: Gebruik een LinkedIn foto URL of upload naar een image host zoals{' '}
                        <a 
                          href="https://postimages.org/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-pastel hover:underline"
                        >
                          postimages.org
                        </a>
                      </p>
                      {editingRole.clientPhoto && (
                        <div className="mt-2 flex items-center gap-2">
                          <div className="relative w-10 h-10 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700">
                            {/* Using img instead of Image for flexibility with any domain */}
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={editingRole.clientPhoto}
                              alt="Preview"
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                e.currentTarget.style.display = 'none';
                              }}
                            />
                          </div>
                          <span className="text-xs text-gray-500">Preview</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Startdatum
                    </label>
                    <input
                      type="month"
                      value={editingRole.startDate}
                      onChange={(e) => setEditingRole({ ...editingRole, startDate: e.target.value })}
                      className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Einddatum (leeg = heden)
                    </label>
                    <input
                      type="month"
                      value={editingRole.endDate || ''}
                      onChange={(e) => setEditingRole({ ...editingRole, endDate: e.target.value || null })}
                      className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    />
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end gap-3 mt-6">
                <button
                  onClick={cancelEditing}
                  className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                >
                  Annuleren
                </button>
                <button
                  onClick={saveEditingRole}
                  className="px-6 py-2 bg-blue-pastel text-gray-900 rounded-full font-semibold hover:brightness-105"
                >
                  {isAddingNew ? 'Toevoegen' : 'Opslaan'}
                </button>
              </div>
            </div>
          </div>
        )}

        {loading ? (
          <div className="text-center py-12 text-gray-500">Laden...</div>
        ) : (
          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
          >
            <SortableContext
              items={roles.map(r => r.id)}
              strategy={verticalListSortingStrategy}
            >
              <div className="space-y-3">
                {roles.length === 0 ? (
                  <div className="text-center py-12 text-gray-500">
                    Nog geen functies toegevoegd. Klik op &ldquo;Toevoegen&rdquo; om te beginnen.
                  </div>
                ) : (
                  roles.map((role) => (
                    <SortableRoleCard
                      key={role.id}
                      role={role}
                      onToggleVisibility={toggleVisibility}
                      onDelete={deleteRole}
                      onEdit={(r) => { setEditingRole(r); setIsAddingNew(false); }}
                    />
                  ))
                )}
              </div>
            </SortableContext>
          </DndContext>
        )}

        <div className="mt-8 p-4 bg-gray-100 dark:bg-gray-800 rounded-xl">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            <strong>Tip:</strong> Functies worden opgeslagen in <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">data/roles.json</code>. 
            Vergeet niet om wijzigingen op te slaan en te committen naar Git als je wilt dat ze live komen.
          </p>
        </div>
      </div>
    </div>
  );
}
