import { createGunzip } from "zlib";
import { createReadStream, createWriteStream } from "fs";
import { join } from "path";

const decompress = async () => {
  const srcFile = createReadStream(join("src", "zip", "files", "archive.gz"));
  const destFile = createWriteStream(join("src", "zip", "files", "fileToDecompress.txt"));

  const gunzip = createGunzip();

  srcFile.pipe(gunzip).pipe(destFile);

  destFile.on("finish", () => {
    console.log(`File decompressed ✅`);
  });
};

await decompress();
