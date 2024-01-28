import fsPromises from "node:fs/promises";

const rename = async () => {
  try {
    await fsPromises.rename(
      "./files/wrongFilename.txt",
      "./files/properFilename.md"
    );
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await rename();
