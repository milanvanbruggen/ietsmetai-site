#!/usr/bin/env tsx
/**
 * Script to check Edge Config items via Vercel API
 * Usage: npx tsx scripts/check-edge-config-items.ts
 */

import { config } from 'dotenv';

// Load .env.local file
config({ path: '.env.local' });

const EDGE_CONFIG_ID = process.env.EDGE_CONFIG_ID;
const VERCEL_TOKEN = process.env.VERCEL_TOKEN;

if (!EDGE_CONFIG_ID || !VERCEL_TOKEN) {
  console.error('❌ Missing EDGE_CONFIG_ID or VERCEL_TOKEN');
  process.exit(1);
}

async function checkEdgeConfigItems() {
  console.log('🔍 Checking Edge Config items via Vercel API...\n');
  console.log(`Edge Config ID: ${EDGE_CONFIG_ID}`);
  console.log(`Token prefix: ${VERCEL_TOKEN?.substring(0, 10) || 'N/A'}...\n`);

  try {
    // Get all items from Edge Config
    const apiUrl = `https://api.vercel.com/v1/edge-config/${EDGE_CONFIG_ID}/items`;

    console.log('📡 Fetching items from:', apiUrl);

    const res = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${VERCEL_TOKEN}`,
      },
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error(`❌ Failed to fetch items (status ${res.status}):`, errorText);
      return;
    }

    const items = await res.json();

    console.log('\n✅ Successfully fetched Edge Config items\n');
    console.log('─'.repeat(70));

    if (!items || items.length === 0) {
      console.log('⚠️  No items found in Edge Config');
      return;
    }

    console.log(`\n📦 Found ${items.length} item(s):\n`);

    for (const item of items) {
      console.log(`\n🔑 Key: "${item.key}"`);
      console.log(`   Edge Config Key: ${item.edgeConfigId}`);

      // Try to parse the value
      let value = item.value;
      console.log(`   Type: ${typeof value}`);

      if (typeof value === 'object' && value !== null) {
        const isArray = Array.isArray(value);
        console.log(`   Structure: ${isArray ? 'Array' : 'Object'}`);

        if (isArray) {
          console.log(`   Length: ${value.length}`);
          if (value.length > 0) {
            console.log(`   First item keys:`, Object.keys(value[0] || {}));
          }
        } else {
          console.log(`   Object keys:`, Object.keys(value));

          // Check if nested structure exists
          if (value[item.key]) {
            const nested = value[item.key];
            console.log(`   ✅ Has nested "${item.key}" property`);
            console.log(`      Nested type: ${Array.isArray(nested) ? `Array[${nested.length}]` : typeof nested}`);
          }
        }

        // Show a preview
        console.log(`   Preview (first 300 chars):`);
        console.log(`   ${JSON.stringify(value, null, 2).substring(0, 300)}...`);
      } else {
        console.log(`   Value:`, value);
      }

      console.log('');
    }

  } catch (error) {
    console.error('\n❌ Error:', error);
  }
}

checkEdgeConfigItems();
