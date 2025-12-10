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

// GET - returns all roles (for admin)
export async function GET() {
  try {
    const data = await getRolesData();
    // Return all roles, sorted by order
    const allRoles = data.roles.sort((a, b) => a.order - b.order);
    return NextResponse.json(allRoles);
  } catch {
    return NextResponse.json({ error: 'Failed to fetch roles' }, { status: 500 });
  }
}

