import { createGzip } from "zlib";
import { createReadStream, createWriteStream } from "fs";
import { join } from "path";

const compress = async () => {
  const srcFile = createReadStream(join("src", "zip", "files", "fileToCompress.txt"));
  const archive = createWriteStream(join("src", "zip", "files", "archive.gz"));
  const gzip = createGzip();

  srcFile.pipe(gzip).pipe(archive);

  archive.on("finish", () => {
    console.log(`File compressed ✅`);
  });
};

await compress();
