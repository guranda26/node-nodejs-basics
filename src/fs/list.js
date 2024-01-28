import { promises as fs } from "fs";

const arrSrc = "./files";

const list = async () => {
  try {
    const files = await fs.readdir(arrSrc);
    console.log(files);
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

await list();
