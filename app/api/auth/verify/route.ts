import { NextResponse } from 'next/server';

// POST: Verify admin password without writing to data store
export async function POST(request: Request) {
  try {
    const { password } = await request.json();

    // Password check (trim to avoid accidental whitespace issues)
    const adminPassword = (process.env.ADMIN_PASSWORD || 'ietsmetai2024').trim();
    const providedPassword = (password || '').trim();

    if (providedPassword !== adminPassword) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error verifying password:', error);
    return NextResponse.json({ error: 'Verification failed' }, { status: 500 });
  }
}

