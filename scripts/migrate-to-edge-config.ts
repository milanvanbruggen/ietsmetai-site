#!/usr/bin/env tsx
/**
 * Script to migrate local data files to Vercel Edge Config
 * Usage: npx tsx scripts/migrate-to-edge-config.ts
 */

import fs from 'fs/promises';
import path from 'path';
import { config } from 'dotenv';

// Load .env.local file
config({ path: '.env.local' });

const EDGE_CONFIG_ID = process.env.EDGE_CONFIG_ID;
const EDGE_CONFIG_TOKEN = process.env.TEMP_VERCEL_TOKEN || process.env.EDGE_CONFIG_TOKEN;

if (!EDGE_CONFIG_ID || !EDGE_CONFIG_TOKEN) {
  console.error('❌ Missing EDGE_CONFIG_ID or EDGE_CONFIG_TOKEN (or TEMP_VERCEL_TOKEN) environment variables');
  console.error('Please set these in your .env.local file or pass them as environment variables');
  process.exit(1);
}

async function migrateFile(key: string, filePath: string) {
  try {
    console.log(`\n📁 Reading ${filePath}...`);
    const data = await fs.readFile(filePath, 'utf-8');
    const parsed = JSON.parse(data);

    console.log(`📤 Uploading to Edge Config with key "${key}"...`);
    const res = await fetch(`https://api.vercel.com/v1/edge-config/${EDGE_CONFIG_ID}/items`, {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${EDGE_CONFIG_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        items: [
          {
            operation: 'upsert',
            key,
            value: parsed,
          },
        ],
      }),
    });

    if (!res.ok) {
      const text = await res.text();
      console.error(`❌ Failed to upload ${key}: ${res.status} ${text}`);
      return false;
    }

    console.log(`✅ Successfully uploaded ${key} to Edge Config`);
    return true;
  } catch (error) {
    console.error(`❌ Error migrating ${filePath}:`, error);
    return false;
  }
}

async function main() {
  console.log('🚀 Starting migration to Edge Config...');
  console.log(`Using Edge Config ID: ${EDGE_CONFIG_ID!.substring(0, 20)}...`);

  const migrations = [
    { key: 'testimonials', file: 'data/testimonials.json' },
    // Add other data files here if needed
    // { key: 'other-data', file: 'data/other.json' },
  ];

  let successCount = 0;
  for (const migration of migrations) {
    const filePath = path.join(process.cwd(), migration.file);
    const success = await migrateFile(migration.key, filePath);
    if (success) successCount++;
  }

  console.log(`\n✨ Migration complete: ${successCount}/${migrations.length} files uploaded`);
}

main().catch(console.error);
