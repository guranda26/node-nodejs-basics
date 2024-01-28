import { promises as fs } from "fs";
const read = async () => {
  try {
    const data = await fs.readFile(
      "./files/fileToRead.txt",
      "utf-8",
      (err, data) => {
        console.log(err);
      }
    );
    console.log(data);
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

await read();
