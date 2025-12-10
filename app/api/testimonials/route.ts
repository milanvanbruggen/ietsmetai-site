import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

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

async function getTestimonialsData(): Promise<TestimonialsData> {
  try {
    const data = await fs.readFile(dataFilePath, 'utf-8');
    return JSON.parse(data);
  } catch {
    return { testimonials: [] };
  }
}

// GET - returns visible testimonials for the public site
export async function GET() {
  try {
    const data = await getTestimonialsData();
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
    
    // Check password
    const adminPassword = process.env.ADMIN_PASSWORD || 'ietsmetai2024';
    if (password !== adminPassword) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Ensure data directory exists
    const dataDir = path.dirname(dataFilePath);
    try {
      await fs.access(dataDir);
    } catch {
      await fs.mkdir(dataDir, { recursive: true });
    }

    const data: TestimonialsData = { testimonials };
    await fs.writeFile(dataFilePath, JSON.stringify(data, null, 2), 'utf-8');
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error saving testimonials:', error);
    return NextResponse.json({ error: 'Failed to save testimonials' }, { status: 500 });
  }
}

