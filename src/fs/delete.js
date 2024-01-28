import { unlink } from "node:fs/promises";
import fsPromises from "node:fs/promises";

const remove = async () => {
  try {
    await unlink("./files/fileToRemove.txt");
    console.log(`successfully deleted`);
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await remove();
