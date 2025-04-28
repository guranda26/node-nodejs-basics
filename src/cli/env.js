import { promises as fs } from 'fs';
import path from 'path';

const parseEnv = async () => {
  const __dirname = path.resolve();
  const envFilePath = path.join(__dirname, '.env'); 

  try {
    const data = await fs.readFile(envFilePath, 'utf-8');
    const lines = data.split('\n');

    lines.forEach(line => {
      if (line.trim() && !line.startsWith('#')) {
        const [key, value] = line.split('=');
        if (key && value) {
          process.env[key] = value.trim();
        }
      }
    });

    const filteredVars = Object.keys(process.env)
      .filter(key => key.startsWith('RSS_'))
      .map(key => `${key}=${process.env[key]}`);

    console.log(filteredVars.join('; '));

  } catch (error) {
    console.error('Error reading .env file:', error);
  }
};

parseEnv();
