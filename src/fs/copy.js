import { promises as fs } from 'fs';
import { join } from 'path';

const srcDir = join("src", "fs", "files");
const destDir = join("src", "fs", "files_copy");

const copyDirRecursive = async (src, dest) => {
  const entries = await fs.readdir(src, { withFileTypes: true });

  await fs.mkdir(dest, { recursive: true });

  for (let entry of entries) {
    const srcPath = join(src, entry.name);
    const destPath = join(dest, entry.name);

    if (entry.isDirectory()) {
      await copyDirRecursive(srcPath, destPath);
    } else {
      await fs.copyFile(srcPath, destPath);
    }
  }
};

const copy = async () => {
  try {
    await fs.access(srcDir);

    try {
      await fs.access(destDir);
      throw new Error("FS operation failed 💣 ❌"); 
    } catch (error) {
      if (error.code === 'ENOENT') {
        await fs.mkdir(destDir);
      } else {
        throw error;
      }
    }

    await copyDirRecursive(srcDir, destDir);
    console.log("All files are copied.");
  } catch (error) {
    throw new Error(`FS operation failed 💣: ${error.message}`);
  }
};

await copy();
