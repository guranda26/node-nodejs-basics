import { createGzip } from "zlib";
import { createReadStream, createWriteStream } from "fs";

const compress = async () => {
  const srcFile = createReadStream("./files/fileToCompress.txt");
  const archive = createWriteStream("./files/archive.gz");
  const gzip = createGzip();

  srcFile.pipe(gzip).pipe(archive);

  archive.on("finish", () => {
    console.log(`File compressed`);
  });
};

await compress();
