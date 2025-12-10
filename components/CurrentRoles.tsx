'use client';

import { useEffect, useState } from 'react';

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

function formatMonth(dateString: string): string {
  const [, month] = dateString.split('-');
  const months = ['januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december'];
  return months[parseInt(month) - 1];
}

function formatYear(dateString: string): string {
  return dateString.split('-')[0];
}

function calculateDuration(startDate: string, endDate: string | null): string {
  const start = new Date(startDate + '-01');
  const end = endDate ? new Date(endDate + '-01') : new Date();
  
  let months = (end.getFullYear() - start.getFullYear()) * 12 + 
               (end.getMonth() - start.getMonth());
  
  // Add 1 to include the current month
  if (!endDate) {
    months += 1;
  }
  
  if (months < 1) return 'minder dan een maand';
  if (months === 1) return '1 maand';
  if (months < 12) return `${months} maanden`;
  
  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;
  
  if (remainingMonths === 0) {
    return years === 1 ? '1 jaar' : `${years} jaar`;
  }
  
  const yearText = years === 1 ? '1 jaar' : `${years} jaar`;
  const monthText = remainingMonths === 1 ? '1 maand' : `${remainingMonths} maanden`;
  
  return `${yearText} en ${monthText}`;
}

export default function CurrentRoles() {
  const [roles, setRoles] = useState<Role[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRoles() {
      try {
        const res = await fetch('/api/roles');
        const data = await res.json();
        // Data comes pre-sorted by order from the API (as set in admin)
        setRoles(data);
      } catch (error) {
        console.error('Failed to fetch roles:', error);
      }
      setLoading(false);
    }
    fetchRoles();
  }, []);

  if (loading) {
    return (
      <section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 dark:bg-gray-800 rounded w-64 mb-8"></div>
            <div className="space-y-6">
              {[1, 2].map(i => (
                <div key={i} className="flex gap-8">
                  <div className="w-24 h-16 bg-gray-200 dark:bg-gray-800 rounded"></div>
                  <div className="flex-1 h-32 bg-gray-200 dark:bg-gray-800 rounded-xl"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (roles.length === 0) {
    return null;
  }

  return (
    <section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
            Waar ik mee bezig ben
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line - positioned to align with dot centers: date-column-width + half-dot-width - half-line-width */}
          <div 
            className="absolute left-[5.4375rem] sm:left-[8.4375rem] top-2 w-0.5 bg-gradient-to-b from-gray-300 via-gray-200 to-transparent dark:from-gray-600 dark:via-gray-700 dark:to-transparent"
            style={{ height: 'calc(100% - 2rem)' }}
          />

          {/* Timeline items */}
          <div className="space-y-8">
            {roles.map((role) => {
              const isActive = !role.endDate;
              const duration = calculateDuration(role.startDate, role.endDate);
              
              return (
                <div key={role.id} className="relative flex items-start">
                  {/* Date column */}
                  <div className="w-20 sm:w-32 flex-shrink-0 text-right pr-3 sm:pr-4 pt-1">
                    <div className="text-lg sm:text-xl font-bold text-gray-700 dark:text-gray-300">
                      {formatYear(role.startDate)}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                      {formatMonth(role.startDate)}
                      {role.endDate && ` – ${formatMonth(role.endDate)}`}
                    </div>
                    <div className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                      {duration}
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="flex-shrink-0 w-4 h-4 mt-1.5 relative z-10">
                    {isActive ? (
                      /* Animated dot for active roles */
                      <>
                        <div className="w-4 h-4 rounded-full bg-green-pastel border-2 border-white dark:border-gray-900 shadow-md" />
                        <div className="absolute inset-0 w-4 h-4 rounded-full bg-green-pastel animate-ping opacity-50" />
                      </>
                    ) : (
                      /* Static dot for completed roles */
                      <div className="w-4 h-4 rounded-full bg-gray-300 dark:bg-gray-600 border-2 border-white dark:border-gray-900 shadow-md" />
                    )}
                  </div>

                  {/* Role card */}
                  <div className="flex-1 ml-3 sm:ml-4 pb-2">
                    <div 
                      className="p-5 sm:p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50"
                    >
                      <div className="flex gap-4">
                        {/* Client photo */}
                        {role.clientPhoto && (
                          <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden flex-shrink-0 border-2 border-white dark:border-gray-800 shadow-md">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={role.clientPhoto}
                              alt={role.clientName || 'Client'}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        )}
                        
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start gap-2 flex-wrap">
                            <h4 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
                              {role.title}
                            </h4>
                            {isActive && (
                              <span className="inline-flex items-center px-2 py-0.5 text-xs font-medium bg-green-pastel/20 text-green-pastel rounded-full">
                                Actief
                              </span>
                            )}
                          </div>
                          <p className="text-blue-pastel font-medium text-sm sm:text-base">
                            {role.organization}
                            {role.clientName && (
                              <span className="text-gray-500 dark:text-gray-400"> · {role.clientName}</span>
                            )}
                          </p>
                          {role.description && (
                            <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
                              {role.description}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* LinkedIn link */}
          <div className="mt-10 text-center">
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">
              Benieuwd naar mijn volledige achtergrond?
            </p>
            <a
              href="https://linkedin.com/in/milanvanbruggen"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-pastel hover:underline font-medium"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              Bekijk mijn LinkedIn profiel
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
