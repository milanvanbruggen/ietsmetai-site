import { promises as fs } from 'fs';
import path from 'path';
import { get } from '@vercel/edge-config';

const isProd = process.env.NODE_ENV === 'production';
// Only use Edge Config if explicitly enabled AND all required vars are present
const hasEdgeConfig = isProd &&
  Boolean(process.env.EDGE_CONFIG) &&
  Boolean(process.env.EDGE_CONFIG_ID) &&
  Boolean(process.env.EDGE_CONFIG_TOKEN);
const edgeConfigId = process.env.EDGE_CONFIG_ID;
const edgeConfigToken = process.env.EDGE_CONFIG_TOKEN;

async function readEdgeConfigValue<T>(key: string): Promise<T | null> {
  if (!hasEdgeConfig) {
    console.log(`Edge Config not available for key "${key}"`);
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
  if (!hasEdgeConfig || !edgeConfigId || !edgeConfigToken) return false;

  try {
    const res = await fetch(`https://api.vercel.com/v1/edge-config/${edgeConfigId}/items`, {
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
      console.error(
        `Edge Config write failed for key "${key}" (status ${res.status}):`,
        await res.text()
      );
      return false;
    }

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
  console.log(`Reading data for key "${key}", isProd: ${isProd}, hasEdgeConfig: ${hasEdgeConfig}`);

  // In production prefer Edge Config; in dev fallback to local files only
  if (hasEdgeConfig) {
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
  // Production: write to Edge Config; do not attempt filesystem writes (read-only in serverless)
  if (hasEdgeConfig) {
    const wroteEdge = await writeEdgeConfigValue(key, value);
    if (!wroteEdge) {
      throw new Error('Failed to write to Edge Config');
    }
    return true;
  }

  // Development: write locally
  await writeFileValue(fallbackFilePath, value);
  return false;
}


