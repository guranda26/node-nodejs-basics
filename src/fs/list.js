import { promises as fs } from "fs";
import { join } from "path";

const filesDir = join("src", "fs", "files");

const list = async () => {
  try {
    const filesToDisplay = await fs.readdir(filesDir);
    console.log(filesToDisplay);
  } catch (err) {
    throw new Error("FS operation failed 💣 ❌");
  }
};

await list();
