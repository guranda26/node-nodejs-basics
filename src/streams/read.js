import { createReadStream } from "fs";

const read = async () => {
  const input = createReadStream("./files/fileToRead.txt", {
    encoding: "utf-8",
  });

  input.on("data", (chunk) => {
    process.stdout.write(chunk);
  });
  input.on("end", () => {
    console.log("\nFile reading complete.");
  });
  input.on("error", (error) => {
    console.error(`Error: ${error.message}`);
  });
};

await read();
