import { promises as fs } from 'fs';
import path from 'path';
import { get } from '@vercel/edge-config';

const isProd = process.env.NODE_ENV === 'production';
// For reading: only need EDGE_CONFIG
const hasEdgeConfigRead = isProd && Boolean(process.env.EDGE_CONFIG);
// For writing: need EDGE_CONFIG_ID and EDGE_CONFIG_TOKEN
const hasEdgeConfigWrite = isProd &&
  Boolean(process.env.EDGE_CONFIG_ID) &&
  Boolean(process.env.EDGE_CONFIG_TOKEN);
const edgeConfigId = process.env.EDGE_CONFIG_ID;
const edgeConfigToken = process.env.EDGE_CONFIG_TOKEN;

async function readEdgeConfigValue<T>(key: string): Promise<T | null> {
  if (!hasEdgeConfigRead) {
    console.log(`Edge Config read not available for key "${key}"`);
    return null;
  }
  try {
    const value = await get(key);
    console.log(`Edge Config read for key "${key}":`, value ? 'found' : 'not found');
    return (value as T | null);
  } catch (error) {
    console.error(`Edge Config read error for key "${key}":`, error);
    return null;
  }
}

async function writeEdgeConfigValue<T>(key: string, value: T): Promise<boolean> {
  if (!hasEdgeConfigWrite || !edgeConfigId || !edgeConfigToken) {
    console.log(`Edge Config write not available for key "${key}" (hasWrite: ${hasEdgeConfigWrite}, hasId: ${Boolean(edgeConfigId)}, hasToken: ${Boolean(edgeConfigToken)})`);
    return false;
  }

  try {
    // Use Vercel API endpoint with Edge Config token
    const apiUrl = `https://api.vercel.com/v1/edge-config/${edgeConfigId}/items`;

    console.log(`Writing to Edge Config via Vercel API for key "${key}"`);

    const res = await fetch(apiUrl, {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${edgeConfigToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        items: [
          {
            operation: 'upsert',
            key,
            value,
          },
        ],
      }),
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error(
        `Edge Config write failed for key "${key}" (status ${res.status}):`,
        errorText
      );
      // Log more details for debugging
      console.error('Request details:', {
        edgeConfigId,
        hasToken: Boolean(edgeConfigToken),
        tokenPrefix: edgeConfigToken?.substring(0, 10),
      });
      return false;
    }

    console.log(`✅ Successfully wrote to Edge Config for key "${key}"`);
    return true;
  } catch (error) {
    console.error(`Edge Config write error for key "${key}":`, error);
    return false;
  }
}

async function readFileValue<T>(filePath: string, defaultValue: T): Promise<T> {
  try {
    const data = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(data) as T;
  } catch {
    return defaultValue;
  }
}

async function writeFileValue<T>(filePath: string, value: T): Promise<void> {
  const dir = path.dirname(filePath);
  try {
    await fs.access(dir);
  } catch {
    await fs.mkdir(dir, { recursive: true });
  }
  await fs.writeFile(filePath, JSON.stringify(value, null, 2), 'utf-8');
}

export async function readData<T>(
  key: string,
  fallbackFilePath: string,
  defaultValue: T
): Promise<T> {
  console.log(`Reading data for key "${key}", isProd: ${isProd}, hasEdgeConfigRead: ${hasEdgeConfigRead}`);

  // In production prefer Edge Config; in dev fallback to local files only
  if (hasEdgeConfigRead) {
    const fromEdge = await readEdgeConfigValue<T>(key);
    if (fromEdge) {
      console.log(`Successfully read from Edge Config for key "${key}"`);
      return fromEdge;
    }
    console.log(`No data in Edge Config for key "${key}", using default value`);
    return defaultValue;
  }

  console.log(`Reading from file: ${fallbackFilePath}`);
  return readFileValue<T>(fallbackFilePath, defaultValue);
}

export async function writeData<T>(
  key: string,
  value: T,
  fallbackFilePath: string
): Promise<boolean> {
  console.log(`Writing data for key "${key}", isProd: ${isProd}, hasEdgeConfigWrite: ${hasEdgeConfigWrite}`);

  // Production: write to Edge Config; do not attempt filesystem writes (read-only in serverless)
  if (hasEdgeConfigWrite) {
    const wroteEdge = await writeEdgeConfigValue(key, value);
    if (!wroteEdge) {
      throw new Error('Failed to write to Edge Config - check environment variables and token permissions');
    }
    return true;
  }

  // Development: write locally
  await writeFileValue(fallbackFilePath, value);
  return false;
}


