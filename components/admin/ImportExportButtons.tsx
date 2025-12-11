'use client';

import { Download, Upload } from 'lucide-react';
import { useState } from 'react';

interface ImportExportButtonsProps<T> {
  data: T[];
  contentType: 'testimonials' | 'roles' | 'projects';
  onImport: (data: T[], mode: 'replace' | 'append') => void;
}

export function ImportExportButtons<T>({ data, contentType, onImport }: ImportExportButtonsProps<T>) {
  const [showImportDialog, setShowImportDialog] = useState(false);
  const [importData, setImportData] = useState<T[] | null>(null);
  const [importError, setImportError] = useState<string | null>(null);

  const handleExport = () => {
    const jsonString = JSON.stringify(data, null, 2);
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${contentType}-${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const json = JSON.parse(e.target?.result as string);

        // Validate that it's an array
        if (!Array.isArray(json)) {
          setImportError('Het bestand moet een JSON array bevatten');
          return;
        }

        setImportData(json);
        setImportError(null);
        setShowImportDialog(true);
      } catch (err) {
        setImportError('Ongeldig JSON bestand');
        console.error('Import error:', err);
      }
    };
    reader.readAsText(file);

    // Reset input so the same file can be selected again
    event.target.value = '';
  };

  const handleImportConfirm = (mode: 'replace' | 'append') => {
    if (!importData) return;
    onImport(importData, mode);
    setShowImportDialog(false);
    setImportData(null);
    setImportError(null);
  };

  const handleImportCancel = () => {
    setShowImportDialog(false);
    setImportData(null);
    setImportError(null);
  };

  return (
    <>
      <div className="flex items-center gap-2">
        <button
          onClick={handleExport}
          className="inline-flex items-center gap-2 px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-full font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition-all"
          title="Exporteer naar JSON bestand"
        >
          <Download className="w-4 h-4" />
          Exporteren
        </button>

        <label className="inline-flex items-center gap-2 px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-full font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition-all cursor-pointer">
          <Upload className="w-4 h-4" />
          Importeren
          <input
            type="file"
            accept=".json"
            onChange={handleFileSelect}
            className="hidden"
          />
        </label>
      </div>

      {importError && (
        <div className="mt-2 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
          <p className="text-sm text-red-600 dark:text-red-400">{importError}</p>
        </div>
      )}

      {/* Import Dialog Modal */}
      {showImportDialog && importData && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl max-w-md w-full border border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Importeren Bevestigen
            </h2>

            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Je staat op het punt om <strong>{importData.length}</strong> {contentType} te importeren.
              Hoe wil je dit doen?
            </p>

            <div className="space-y-3 mb-6">
              <button
                onClick={() => handleImportConfirm('replace')}
                className="w-full p-4 text-left border-2 border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-pastel dark:hover:border-blue-pastel transition-all"
              >
                <div className="font-semibold text-gray-900 dark:text-white mb-1">
                  Alles vervangen
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Verwijder alle huidige {contentType} en vervang met geïmporteerde data
                </div>
              </button>

              <button
                onClick={() => handleImportConfirm('append')}
                className="w-full p-4 text-left border-2 border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-pastel dark:hover:border-blue-pastel transition-all"
              >
                <div className="font-semibold text-gray-900 dark:text-white mb-1">
                  Toevoegen
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Voeg geïmporteerde {contentType} toe naast bestaande items
                </div>
              </button>
            </div>

            <div className="flex justify-end">
              <button
                onClick={handleImportCancel}
                className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                Annuleren
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
