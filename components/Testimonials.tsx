'use client';

import { useEffect, useState } from 'react';
import { Quote } from 'lucide-react';

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

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTestimonials() {
      try {
        const res = await fetch('/api/testimonials');
        const data = await res.json();
        setTestimonials(data);
      } catch (error) {
        console.error('Failed to fetch testimonials:', error);
      }
      setLoading(false);
    }
    fetchTestimonials();
  }, []);

  if (loading) {
    return null;
  }

  if (testimonials.length === 0) {
    return null;
  }

  return (
    <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10 sm:mb-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
            Wat zeggen opdrachtgevers?
          </h2>
        </div>

        {/* Masonry grid using CSS columns */}
        <div 
          className="columns-1 md:columns-2 lg:columns-3 gap-6"
          style={{ columnFill: 'balance' }}
        >
          {testimonials.map((testimonial) => {
            return (
              <div
                key={testimonial.id}
                className="
                  break-inside-avoid mb-6
                  bg-white dark:bg-gray-900
                  rounded-2xl
                  border border-gray-200 dark:border-gray-800
                  shadow-sm hover:shadow-md
                  transition-shadow duration-300
                  flex flex-col
                  p-6 sm:p-8
                "
              >
                {/* Quote icon - subtle and small */}
                <Quote className="w-5 h-5 text-gray-300 dark:text-gray-700 mb-4" />
                
                {/* Testimonial text */}
                <div className="flex-1 mb-6">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
                    &ldquo;{testimonial.testimonial}&rdquo;
                  </p>
                </div>
                
                {/* Person info */}
                <div className="flex items-center gap-4 pt-5 border-t border-gray-100 dark:border-gray-800">
                  {testimonial.personPhoto && (
                    <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={testimonial.personPhoto}
                        alt={testimonial.personName}
                        className="w-full h-full object-cover"
                        style={{
                          objectPosition: getFocalPointPosition(testimonial.focalPoint || 'center')
                        }}
                      />
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
                      {testimonial.personName}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {testimonial.personRole}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      {testimonial.clientName}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
