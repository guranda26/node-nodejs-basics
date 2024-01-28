import { promises as fs } from "node:fs";

const path = "./fresh.txt";

const create = async () => {
  try {
    await fs.stat(path);

    throw new Error("FS operation failed");
  } catch (error) {
    if (error.code === "ENOENT") {
      await fs.writeFile(path, "I am fresh and young");
      console.log("File created");
    } else {
      throw error;
    }
  }
};

await create();
