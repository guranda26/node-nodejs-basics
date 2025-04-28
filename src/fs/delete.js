import { unlink } from "fs/promises";
import { join } from "path";

const remove = async () => {
  const fileToDelete = join("src", "fs", "files", "fileToRemove.txt")
  try {
    await unlink(fileToDelete);
    console.log("successfully deleted file ✨");
  } catch (error) {
    throw new Error("FS operation failed 💣 ❌");
  }
};

await remove();
