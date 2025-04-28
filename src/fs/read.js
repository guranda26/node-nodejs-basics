import { promises as fs } from "fs";
import { join } from "path";


const read = async () => {
  const fileToRead = join("src", "fs", "files", "fileToRead.txt");
  try {
    const data = await fs.readFile(
      fileToRead,
      "utf-8",
      (err, data) => {
        console.log(err);
      }
    );
    console.log(data);
  } catch (err) {
    throw new Error("FS operation failed 💣 ❌");
  }
};

await read();
