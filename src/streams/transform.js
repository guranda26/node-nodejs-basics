import { Transform } from "stream";

const transform = async () => {
  console.log("Enter data: 💬", "\n");
  console.log("Or quit with: (Ctrl+D on Mac or Ctrl+Z on Windows)", "\n");
  const reversedOutput = new Transform({
    transform(chunk, encoding, callback) {
      this.push(chunk.toString().split("").reverse().join("") + "\n");
      callback(); 
    },
  });

  process.stdin.pipe(reversedOutput).pipe(process.stdout);
};

await transform();
