#!/usr/bin/env tsx
/**
 * Test script to verify Edge Config write permissions
 * Usage: npx tsx scripts/test-edge-config-write.ts
 */

import { config } from 'dotenv';

// Load .env.local file
config({ path: '.env.local' });

const EDGE_CONFIG_ID = process.env.EDGE_CONFIG_ID;
const EDGE_CONFIG_TOKEN = process.env.TEMP_VERCEL_TOKEN || process.env.EDGE_CONFIG_TOKEN;

if (!EDGE_CONFIG_ID || !EDGE_CONFIG_TOKEN) {
  console.error('❌ Missing EDGE_CONFIG_ID or EDGE_CONFIG_TOKEN');
  process.exit(1);
}

async function testWrite() {
  console.log('🧪 Testing Edge Config write...');
  console.log(`Edge Config ID: ${EDGE_CONFIG_ID}`);
  console.log(`Token prefix: ${EDGE_CONFIG_TOKEN.substring(0, 10)}...`);

  const isVercelApiToken = EDGE_CONFIG_TOKEN.startsWith('vercel_');
  // Always use Vercel API endpoint - Edge Config tokens work with this endpoint too
  const apiUrl = `https://api.vercel.com/v1/edge-config/${EDGE_CONFIG_ID}/items`;

  console.log(`\nToken type: ${isVercelApiToken ? 'Vercel API Token' : 'Edge Config Token'}`);
  console.log(`API URL: ${apiUrl}`);

  // Test with a simple write
  const testData = {
    items: [
      {
        operation: 'upsert',
        key: '_test',
        value: { test: true, timestamp: Date.now() },
      },
    ],
  };

  console.log('\n📤 Sending test write request...');

  try {
    const res = await fetch(apiUrl, {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${EDGE_CONFIG_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testData),
    });

    console.log(`\nResponse status: ${res.status} ${res.statusText}`);
    const responseText = await res.text();

    if (!res.ok) {
      console.error('❌ Write failed!');
      console.error('Response:', responseText);

      try {
        const parsed = JSON.parse(responseText);
        console.error('Error details:', JSON.stringify(parsed, null, 2));
      } catch {
        // Response is not JSON
      }

      return false;
    }

    console.log('✅ Write successful!');
    console.log('Response:', responseText);
    return true;
  } catch (error) {
    console.error('❌ Request failed:', error);
    return false;
  }
}

testWrite().then((success) => {
  process.exit(success ? 0 : 1);
});
