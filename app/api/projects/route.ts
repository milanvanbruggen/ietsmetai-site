import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

const dataFilePath = path.join(process.cwd(), 'data', 'projects.json');

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

// GET: Return visible projects for public display
export async function GET() {
  try {
    const fileContent = await fs.readFile(dataFilePath, 'utf-8');
    const data: ProjectsData = JSON.parse(fileContent);
    
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
    await fs.writeFile(dataFilePath, JSON.stringify(data, null, 2));
    
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to save projects' }, { status: 500 });
  }
}

