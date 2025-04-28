import {promises as fs} from "fs";
import path, { join } from "path";

const rename = async () => {
  const wrongFilename = join("src", "fs", "files", "wrongFilename.md");
  const correctFilename = join("src", "fs", "files", "properFilename.md");
  try {
    await fs.access(wrongFilename);
    await fs.rename(wrongFilename, correctFilename);
    console.log("File renamed successfully ✨");
    
  } catch (error) {
    throw new Error("FS operation failed 💣 ❌");
  }
};

await rename();
