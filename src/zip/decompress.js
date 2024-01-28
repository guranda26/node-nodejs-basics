import { createGunzip } from "zlib";
import { createReadStream, createWriteStream } from "fs";

const decompress = async () => {
  const srcFile = createReadStream("./files/archive.gz");
  const destFile = createWriteStream("./files/fileToDecompress.txt");

  const gunzip = createGunzip();

  srcFile.pipe(gunzip).pipe(destFile);

  destFile.on("finish", () => {
    console.log(`File decompressed`);
  });
};

await decompress();
