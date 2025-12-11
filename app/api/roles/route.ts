import { NextResponse } from 'next/server';
import path from 'path';
import { readData, writeData } from '@/lib/data-store';

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

// GET - returns visible roles for the public site
export async function GET() {
  try {
    const data = await readData<RolesData>('roles', dataFilePath, { roles: [] });
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
    
    // Check password (trim to avoid whitespace issues)
    const adminPassword = (process.env.ADMIN_PASSWORD || 'ietsmetai2024').trim();
    const providedPassword = (password || '').trim();
    if (providedPassword !== adminPassword) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const data: RolesData = { roles };
    await writeData<RolesData>('roles', data, dataFilePath);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error saving roles:', error);
    const errorMessage = error instanceof Error ? error.message : 'Failed to save roles';
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}

