import { NextResponse } from 'next/server';
import path from 'path';
import { readData, writeData } from '@/lib/data-store';

export interface Project {
  id: number;
  name: string;
  description: string | null;
  language: string | null;
  visible: boolean;
  order: number;
}

interface ProjectsData {
  projects: Project[];
}

const dataFilePath = path.join(process.cwd(), 'data', 'projects.json');

// GET: Return visible projects for public display
export async function GET() {
  try {
    const data = await readData<ProjectsData>('projects', dataFilePath, { projects: [] });
    
    // Return only visible projects, sorted by order
    const visibleProjects = data.projects
      .filter((p) => p.visible)
      .sort((a, b) => a.order - b.order);
    
    return NextResponse.json(visibleProjects);
  } catch {
    return NextResponse.json([]);
  }
}

// POST: Update projects (requires admin password)
export async function POST(request: Request) {
  try {
    const { password, projects } = await request.json();
    
    // Simple password check (set this in your environment or change it)
    const adminPassword = process.env.ADMIN_PASSWORD || 'ietsmetai2024';
    
    if (password !== adminPassword) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    
    const data: ProjectsData = { projects };
    await writeData<ProjectsData>('projects', data, dataFilePath);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error saving projects:', error);
    return NextResponse.json({ error: 'Failed to save projects' }, { status: 500 });
  }
}

