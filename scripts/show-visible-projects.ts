#!/usr/bin/env tsx
/**
 * Script to show visible projects from Edge Config
 */

import { config } from 'dotenv';
config({ path: '.env.local' });

const EDGE_CONFIG_ID = process.env.EDGE_CONFIG_ID;
const VERCEL_TOKEN = process.env.VERCEL_TOKEN;

if (!EDGE_CONFIG_ID || !VERCEL_TOKEN) {
  console.error('❌ Missing EDGE_CONFIG_ID or VERCEL_TOKEN');
  process.exit(1);
}

async function showVisibleProjects() {
  const apiUrl = `https://api.vercel.com/v1/edge-config/${EDGE_CONFIG_ID}/item/projects`;

  const res = await fetch(apiUrl, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${VERCEL_TOKEN}`,
    },
  });

  if (!res.ok) {
    console.error(`❌ Failed (${res.status}):`, await res.text());
    return;
  }

  const data = await res.json();

  // The API returns: { key: 'projects', value: { projects: [...] }, ... }
  const value = data.value || {};
  const projects = value.projects || [];

  const visibleProjects = Array.isArray(projects)
    ? projects.filter((p: any) => p.visible)
    : [];

  console.log(`\n📊 Projects in Edge Config:`);
  console.log(`   Total: ${projects.length}`);
  console.log(`   Visible: ${visibleProjects.length}\n`);

  if (visibleProjects.length > 0) {
    console.log('✅ Visible projects:');
    visibleProjects.forEach((p: any, i: number) => {
      console.log(`   ${i + 1}. ${p.name} (order: ${p.order})`);
    });
  } else {
    console.log('⚠️  No visible projects found');
  }
}

showVisibleProjects();
