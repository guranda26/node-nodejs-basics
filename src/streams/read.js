import { createReadStream } from "fs";
import { join } from "path";

const read = async () => {
  const filePath = join("src", "streams", "files", "fileToRead.txt")
  const input = createReadStream(filePath, {
    encoding: "utf-8",
  });

  input.on("data", (chunk) => {
    process.stdout.write(chunk);
  });
  input.on("end", () => {
    console.log("\nFile reading complete ✅");
  });
  input.on("error", (error) => {
    console.error(`Error: ${error.message}`);
  });
};

await read();
