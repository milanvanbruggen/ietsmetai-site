import { NextResponse } from 'next/server';
import path from 'path';
import { readData, writeData } from '@/lib/data-store';

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

// GET - returns visible testimonials for the public site
export async function GET() {
  try {
    const data = await readData<TestimonialsData>('testimonials', dataFilePath, {
      testimonials: [],
    });
    // Return only visible testimonials, sorted by order, with default focalPoint
    const visibleTestimonials = data.testimonials
      .filter(testimonial => testimonial.visible)
      .map(testimonial => ({
        ...testimonial,
        focalPoint: testimonial.focalPoint || 'center'
      }))
      .sort((a, b) => a.order - b.order);
    return NextResponse.json(visibleTestimonials);
  } catch {
    return NextResponse.json({ error: 'Failed to fetch testimonials' }, { status: 500 });
  }
}

// POST - saves testimonials (requires password)
export async function POST(request: Request) {
  try {
    const { password, testimonials } = await request.json();
    
    // Check password (trim to avoid whitespace issues)
    const adminPassword = (process.env.ADMIN_PASSWORD || 'ietsmetai2024').trim();
    const providedPassword = (password || '').trim();
    if (providedPassword !== adminPassword) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const data: TestimonialsData = { testimonials };
    await writeData<TestimonialsData>('testimonials', data, dataFilePath);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error saving testimonials:', error);
    const errorMessage = error instanceof Error ? error.message : 'Failed to save testimonials';
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}

