import { Transform } from "stream";

const transform = async () => {
  const reversedOutput = new Transform({
    transform(chunk, encoding, callback) {
      this.push(chunk.toString().split("").reverse().join(""));
      callback();
    },
  });

  process.stdin.pipe(reversedOutput).pipe(process.stdout);
};

await transform();
