#!/usr/bin/env tsx
/**
 * Script to inspect current Edge Config data
 * Usage: npx tsx scripts/inspect-edge-config.ts
 */

import { config } from 'dotenv';
import { get, getAll } from '@vercel/edge-config';

// Load .env.local file
config({ path: '.env.local' });

async function inspectEdgeConfig() {
  console.log('🔍 Inspecting Edge Config...\n');

  try {
    // Try to get all data
    console.log('📊 Getting all keys from Edge Config...');
    const allData = await getAll();

    if (!allData || Object.keys(allData).length === 0) {
      console.log('⚠️  Edge Config is empty or not accessible');
      return;
    }

    console.log('\n✅ Found the following keys in Edge Config:');
    console.log('─'.repeat(50));

    for (const [key, value] of Object.entries(allData)) {
      console.log(`\n📦 Key: "${key}"`);
      console.log(`   Type: ${Array.isArray(value) ? 'Array' : typeof value}`);

      if (Array.isArray(value)) {
        console.log(`   Length: ${value.length}`);
        console.log(`   First item:`, value[0] || 'N/A');
      } else if (typeof value === 'object' && value !== null) {
        console.log(`   Keys:`, Object.keys(value));
        console.log(`   Preview:`, JSON.stringify(value, null, 2).slice(0, 200) + '...');
      } else {
        console.log(`   Value:`, value);
      }
    }

    // Specifically check for testimonials, roles, and projects
    console.log('\n\n🔎 Checking specific keys:');
    console.log('─'.repeat(50));

    for (const key of ['testimonials', 'roles', 'projects']) {
      const value = await get(key);
      console.log(`\n• ${key}:`, value ? '✅ Found' : '❌ Not found');
      if (value) {
        const isObject = typeof value === 'object' && value !== null;
        const isArray = Array.isArray(value);
        console.log(`  Structure: ${isArray ? 'Array' : isObject ? 'Object' : typeof value}`);

        if (isObject && !isArray) {
          const keys = Object.keys(value as object);
          console.log(`  Keys in object: ${keys.join(', ')}`);

          // Check if it has the expected nested structure
          if (keys.includes(key)) {
            const nested = (value as any)[key];
            console.log(`  ✅ Has nested "${key}" property (${Array.isArray(nested) ? `Array[${nested.length}]` : typeof nested})`);
          } else {
            console.log(`  ⚠️  Missing nested "${key}" property`);
          }
        }
      }
    }

  } catch (error) {
    console.error('\n❌ Error inspecting Edge Config:', error);
  }
}

inspectEdgeConfig();
