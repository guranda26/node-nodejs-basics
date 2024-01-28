import { createReadStream, writeFile } from "fs";
import { createHash } from "crypto";

const calculateHash = async () => {
  return new Promise((resolve, reject) => {
    const hash = createHash("sha256");
    const fileStream = createReadStream("./files/fileToCalculateHashFor.txt");

    fileStream.on("error", reject);
    fileStream.on("data", (chunk) => hash.update(chunk));
    fileStream.on("end", () => {
      const hashValue = hash.digest("hex");
      console.log(hashValue);
      resolve(hashValue);
    });
  });
};

// Optionally write the hash to a file
await calculateHash();
