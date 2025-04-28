import { createWriteStream } from "fs";
import { join } from "path";

const write = async () => {
  const filePath = join("src", "streams", "files", "fileToWrite.txt");
  const output = createWriteStream(filePath, {
    encoding: "utf-8",
    flags: "a", 
  });

  console.log("Send the EOF signal when you're done (Ctrl+D on Mac or Ctrl+Z on Windows) or");
  console.log("Enter data:", "\n");

  process.stdin.pipe(output);

  process.stdin.on("end", () => {
    output.end();
  });

  output.on("error", (error) => {
    console.error(`Error: ${error.message}`);
  });

  output.on("finish", () => {
    console.log("File writing complete ✅");
  });
};

await write();
