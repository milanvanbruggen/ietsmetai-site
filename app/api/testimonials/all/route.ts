import { NextResponse } from 'next/server';
import path from 'path';
import { readData } from '@/lib/data-store';

interface Testimonial {
  id: number;
  clientName: string;
  personName: string;
  personRole: string;
  personPhoto: string | null;
  focalPoint: 'top-left' | 'top-center' | 'top-right' | 'center-left' | 'center' | 'center-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';
  testimonial: string;
  visible: boolean;
  order: number;
}

interface TestimonialsData {
  testimonials: Testimonial[];
}

const dataFilePath = path.join(process.cwd(), 'data', 'testimonials.json');

// GET - returns all testimonials (for admin)
export async function GET() {
  try {
    const data = await readData<TestimonialsData>('testimonials', dataFilePath, {
      testimonials: [],
    });
    // Return all testimonials, sorted by order, with default focalPoint
    const allTestimonials = data.testimonials
      .map(testimonial => ({
        ...testimonial,
        focalPoint: testimonial.focalPoint || 'center'
      }))
      .sort((a, b) => a.order - b.order);
    return NextResponse.json(allTestimonials);
  } catch {
    return NextResponse.json({ error: 'Failed to fetch testimonials' }, { status: 500 });
  }
}

