'use client';

import { useState, useEffect } from 'react';
import { Eye, EyeOff, Save, Plus, Trash2, Check, X, ArrowLeft, User, GripVertical, Link as LinkIcon, Quote } from 'lucide-react';
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

type FocalPoint = 'top-left' | 'top-center' | 'top-right' | 'center-left' | 'center' | 'center-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';

interface Testimonial {
  id: number;
  clientName: string;
  personName: string;
  personRole: string;
  personPhoto: string | null;
  focalPoint: FocalPoint;
  testimonial: string;
  visible: boolean;
  order: number;
}

function getFocalPointPosition(focalPoint: FocalPoint): string {
  const positions: Record<FocalPoint, string> = {
    'top-left': 'top left',
    'top-center': 'top center',
    'top-right': 'top right',
    'center-left': 'center left',
    'center': 'center',
    'center-right': 'center right',
    'bottom-left': 'bottom left',
    'bottom-center': 'bottom center',
    'bottom-right': 'bottom right',
  };
  return positions[focalPoint];
}

interface SortableTestimonialCardProps {
  testimonial: Testimonial;
  onToggleVisibility: (id: number) => void;
  onDelete: (id: number) => void;
  onEdit: (testimonial: Testimonial) => void;
}

function SortableTestimonialCard({ testimonial, onToggleVisibility, onDelete, onEdit }: SortableTestimonialCardProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: testimonial.id });

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
        testimonial.visible
          ? 'border-green-pastel shadow-md'
          : 'border-gray-200 dark:border-gray-800 opacity-60'
      } ${isDragging ? 'shadow-2xl ring-2 ring-blue-pastel' : ''}`}
    >
      <div className="flex items-start gap-4">
        {/* Drag handle */}
        <div
          {...attributes}
          {...listeners}
          className="cursor-grab active:cursor-grabbing p-2 -m-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 touch-none mt-1"
        >
          <GripVertical className="w-5 h-5" />
        </div>

        {/* Person photo or placeholder */}
        <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-100 dark:bg-gray-800 flex-shrink-0">
          {testimonial.personPhoto ? (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              src={testimonial.personPhoto}
              alt={testimonial.personName}
              className="w-full h-full object-cover"
              style={{
                objectPosition: getFocalPointPosition(testimonial.focalPoint || 'center')
              }}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <User className="w-6 h-6 text-gray-400" />
            </div>
          )}
        </div>
        
        <div className="flex-1 cursor-pointer min-w-0" onClick={() => onEdit(testimonial)}>
          <div className="flex items-start gap-2 flex-wrap">
            <h3 className="font-semibold text-gray-900 dark:text-white">
              {testimonial.personName || 'Geen naam'}
            </h3>
            {testimonial.personRole && (
              <span className="text-sm text-gray-500 dark:text-gray-400">
                · {testimonial.personRole}
              </span>
            )}
          </div>
          <p className="text-sm text-blue-pastel font-medium">
            {testimonial.clientName || 'Geen opdrachtgever'}
          </p>
          {testimonial.testimonial && (
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 line-clamp-2">
              &ldquo;{testimonial.testimonial}&rdquo;
            </p>
          )}
        </div>
        
        <div className="flex items-center gap-2">
          <button
            onClick={() => onToggleVisibility(testimonial.id)}
            className={`p-2 rounded-lg transition-all ${
              testimonial.visible
                ? 'bg-green-pastel/20 text-green-pastel'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-400'
            }`}
          >
            {testimonial.visible ? (
              <Eye className="w-5 h-5" />
            ) : (
              <EyeOff className="w-5 h-5" />
            )}
          </button>
          <button
            onClick={() => onDelete(testimonial.id)}
            className="p-2 rounded-lg bg-red-500/10 text-red-500 hover:bg-red-500/20"
          >
            <Trash2 className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function AdminTestimonialsPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saveStatus, setSaveStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [editingTestimonial, setEditingTestimonial] = useState<Testimonial | null>(null);
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

  // Fetch testimonials when authenticated
  useEffect(() => {
    if (isAuthenticated) {
      fetchTestimonials();
    }
  }, [isAuthenticated]);

  // Handle Escape key to close modal
  useEffect(() => {
    if (!editingTestimonial) return;
    
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        cancelEditing();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [editingTestimonial]);

  const fetchTestimonials = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/testimonials/all');
      const data = await res.json();
      setTestimonials(data);
    } catch (err) {
      console.error('Failed to fetch testimonials:', err);
    }
    setLoading(false);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      setTestimonials((items) => {
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
    setTestimonials(testimonials.map(t => 
      t.id === id ? { ...t, visible: !t.visible } : t
    ));
    setSaveStatus('idle');
  };

  const saveTestimonials = async () => {
    setSaving(true);
    setSaveStatus('idle');
    
    try {
      const res = await fetch('/api/testimonials', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password, testimonials }),
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

  const deleteTestimonial = (id: number) => {
    setTestimonials(testimonials.filter(t => t.id !== id));
    setSaveStatus('idle');
  };

  const addNewTestimonial = () => {
    const newTestimonial: Testimonial = {
      id: Date.now(),
      clientName: '',
      personName: '',
      personRole: '',
      personPhoto: null,
      focalPoint: 'center',
      testimonial: '',
      visible: true,
      order: testimonials.length,
    };
    setEditingTestimonial(newTestimonial);
    setIsAddingNew(true);
  };

  const saveEditingTestimonial = () => {
    if (!editingTestimonial) return;
    
    if (isAddingNew) {
      setTestimonials([...testimonials, editingTestimonial]);
    } else {
      setTestimonials(testimonials.map(t => t.id === editingTestimonial.id ? editingTestimonial : t));
    }
    
    setEditingTestimonial(null);
    setIsAddingNew(false);
    setSaveStatus('idle');
  };

  const cancelEditing = () => {
    setEditingTestimonial(null);
    setIsAddingNew(false);
  };

  const handleImport = (importedData: Testimonial[], mode: 'replace' | 'append') => {
    if (mode === 'replace') {
      // Replace all testimonials with imported data, re-assign order
      const reorderedData = importedData.map((t, index) => ({
        ...t,
        order: index,
      }));
      setTestimonials(reorderedData);
    } else {
      // Append imported data to existing testimonials
      const maxOrder = testimonials.length > 0 ? Math.max(...testimonials.map(t => t.order)) : -1;
      const newTestimonials = importedData.map((t, index) => ({
        ...t,
        id: Date.now() + index, // Generate new IDs to avoid conflicts
        order: maxOrder + index + 1,
      }));
      setTestimonials([...testimonials, ...newTestimonials]);
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
            Testimonials Beheren
          </h1>
          <div className="flex items-center justify-between flex-wrap gap-4">
            <ImportExportButtons
              data={testimonials}
              contentType="testimonials"
              onImport={handleImport}
            />
            <div className="flex items-center gap-4">
              <button
                onClick={addNewTestimonial}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-full font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition-all"
              >
                <Plus className="w-5 h-5" />
                Toevoegen
              </button>
              <button
                onClick={saveTestimonials}
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
        </div>

        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Beheer testimonials van opdrachtgevers. Sleep om de volgorde aan te passen.
        </p>

        {/* Edit Modal */}
        {editingTestimonial && (
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
                {isAddingNew ? 'Nieuwe testimonial toevoegen' : 'Testimonial bewerken'}
              </h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Opdrachtgever
                  </label>
                  <input
                    type="text"
                    value={editingTestimonial.clientName}
                    onChange={(e) => setEditingTestimonial({ ...editingTestimonial, clientName: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    placeholder="Bijv. SEO-bureau Onder"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Naam persoon
                  </label>
                  <input
                    type="text"
                    value={editingTestimonial.personName}
                    onChange={(e) => setEditingTestimonial({ ...editingTestimonial, personName: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    placeholder="Bijv. Jan Jansen"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Rol persoon
                  </label>
                  <input
                    type="text"
                    value={editingTestimonial.personRole}
                    onChange={(e) => setEditingTestimonial({ ...editingTestimonial, personRole: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    placeholder="Bijv. CEO, Marketing Manager"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    <span className="flex items-center gap-2">
                      <LinkIcon className="w-3 h-3" />
                      Foto URL persoon
                    </span>
                  </label>
                  <input
                    type="text"
                    value={editingTestimonial.personPhoto || ''}
                    onChange={(e) => setEditingTestimonial({ ...editingTestimonial, personPhoto: e.target.value || null })}
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
                  {editingTestimonial.personPhoto && (
                    <div className="mt-3">
                      <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-2">
                        Focal point
                      </label>
                      <p className="text-xs text-gray-500 mb-3">Klik op een vakje in de foto om het focuspunt te kiezen</p>
                      
                      {/* Preview with overlay grid */}
                      <div className="relative w-48 h-48 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700 border-2 border-gray-300 dark:border-gray-600">
                        {/* Photo */}
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={editingTestimonial.personPhoto}
                          alt="Preview"
                          className="w-full h-full object-cover"
                          style={{
                            objectPosition: getFocalPointPosition(editingTestimonial.focalPoint)
                          }}
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                        
                        {/* Transparent grid overlay */}
                        <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 pointer-events-none">
                          {(['top-left', 'top-center', 'top-right', 'center-left', 'center', 'center-right', 'bottom-left', 'bottom-center', 'bottom-right'] as FocalPoint[]).map((point) => (
                            <button
                              key={point}
                              type="button"
                              onClick={() => setEditingTestimonial({ ...editingTestimonial, focalPoint: point })}
                              className={`relative border-2 transition-all pointer-events-auto ${
                                editingTestimonial.focalPoint === point
                                  ? 'border-blue-pastel bg-blue-pastel/30 ring-2 ring-blue-pastel/50'
                                  : 'border-transparent hover:border-white/50 hover:bg-white/10'
                              }`}
                              title={point.replace('-', ' ')}
                            >
                              {editingTestimonial.focalPoint === point && (
                                <div className="absolute inset-0 flex items-center justify-center">
                                  <div className="w-3 h-3 rounded-full bg-blue-pastel ring-2 ring-white shadow-lg" />
                                </div>
                              )}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    <span className="flex items-center gap-2">
                      <Quote className="w-3 h-3" />
                      Testimonial
                    </span>
                  </label>
                  <textarea
                    value={editingTestimonial.testimonial}
                    onChange={(e) => setEditingTestimonial({ ...editingTestimonial, testimonial: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    rows={5}
                    placeholder="De testimonial tekst..."
                  />
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
                  onClick={saveEditingTestimonial}
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
              items={testimonials.map(t => t.id)}
              strategy={verticalListSortingStrategy}
            >
              <div className="space-y-3">
                {testimonials.length === 0 ? (
                  <div className="text-center py-12 text-gray-500">
                    Nog geen testimonials toegevoegd. Klik op &ldquo;Toevoegen&rdquo; om te beginnen.
                  </div>
                ) : (
                  testimonials.map((testimonial) => (
                    <SortableTestimonialCard
                      key={testimonial.id}
                      testimonial={testimonial}
                      onToggleVisibility={toggleVisibility}
                      onDelete={deleteTestimonial}
                      onEdit={(t) => { setEditingTestimonial(t); setIsAddingNew(false); }}
                    />
                  ))
                )}
              </div>
            </SortableContext>
          </DndContext>
        )}

        <div className="mt-8 p-4 bg-gray-100 dark:bg-gray-800 rounded-xl">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            <strong>Tip:</strong> Testimonials worden opgeslagen in <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">data/testimonials.json</code>. 
            Vergeet niet om wijzigingen op te slaan en te committen naar Git als je wilt dat ze live komen.
          </p>
        </div>
      </div>
    </div>
  );
}

