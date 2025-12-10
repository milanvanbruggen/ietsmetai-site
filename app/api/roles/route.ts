import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

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

interface RolesData {
  roles: Role[];
}

const dataFilePath = path.join(process.cwd(), 'data', 'roles.json');

async function getRolesData(): Promise<RolesData> {
  try {
    const data = await fs.readFile(dataFilePath, 'utf-8');
    return JSON.parse(data);
  } catch {
    return { roles: [] };
  }
}

// GET - returns visible roles for the public site
export async function GET() {
  try {
    const data = await getRolesData();
    // Return only visible roles, sorted by order
    const visibleRoles = data.roles
      .filter(role => role.visible)
      .sort((a, b) => a.order - b.order);
    return NextResponse.json(visibleRoles);
  } catch {
    return NextResponse.json({ error: 'Failed to fetch roles' }, { status: 500 });
  }
}

// POST - saves roles (requires password)
export async function POST(request: Request) {
  try {
    const { password, roles } = await request.json();
    
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

    const data: RolesData = { roles };
    await fs.writeFile(dataFilePath, JSON.stringify(data, null, 2), 'utf-8');
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error saving roles:', error);
    return NextResponse.json({ error: 'Failed to save roles' }, { status: 500 });
  }
}

