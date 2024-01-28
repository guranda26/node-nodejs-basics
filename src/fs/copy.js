import fsPromises from "node:fs/promises";
import path from "node:path";

const srcDir = "./files";
const destDir = "./files_copy";

const copy = async () => {
  try {
    await fsPromises.access(srcDir);
    try {
      await fsPromises.access(destDir);
      throw new Error("FS operation failed");
    } catch {
      await fsPromises.mkdir(destDir);
    }
    const fileDocs = await fsPromises.readdir(srcDir);
    for (const doc of fileDocs) {
      const srcPath = path.join(srcDir, doc);
      const destPath = path.join(destDir, doc);
      await fsPromises.copyFile(srcPath, destPath);
    }

    console.log("All files are copied.");
  } catch (error) {
    throw new Error("FS operation failed", error.message);
  }
};

await copy();
