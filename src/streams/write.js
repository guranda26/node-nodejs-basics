import { createWriteStream } from "fs";

const write = async () => {
  const output = createWriteStream("./files/fileToWrite.txt", {
    encoding: "utf-8",
    flags: "a",
  });

  process.stdin.pipe(output);
  output.on("error", (error) => {
    console.error(`Error: ${error.message}`);
  });

  process.stdin.on("end", () => {
    console.log("Operation is complete.");
  });
};

await write();
