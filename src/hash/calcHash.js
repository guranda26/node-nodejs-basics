import { createReadStream } from "fs";
import { createHash } from "crypto";
import { join } from "path";

const calculateHash = async () => {
  return new Promise((resolve, reject) => {
    const hash = createHash("sha256");
    const fileStream = createReadStream(join("src", "hash", "files", "fileToCalculateHashFor.txt"));
    fileStream.on("error", reject);
    fileStream.on("data", (chunk) => hash.update(chunk));
    fileStream.on("end", () => {
      const hashValue = hash.digest("hex");
      console.log(hashValue);
      resolve(hashValue);
    });
  });
};

await calculateHash();
