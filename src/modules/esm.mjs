import path from "path";
import { release, version } from "os";
import { createServer as createServerHttp } from "http";
import { URL } from "url";
import "./files/c.js";

const random = Math.random();

const __filename = new URL("", import.meta.url).pathname;
const __dirname = new URL(".", import.meta.url).pathname;


const jsonFile = async (data) => {
 try {
  const filePath = path.join(__dirname, `files/${data}.json`);
  const fileUrl = new URL(filePath, import.meta.url);
  const module = await import(fileUrl, {
    with: { type: "json" },
  });
  return module.default;
 } catch (error) {
  console.error("Failed to load JSON", error)
 }
};

let unknownObject;

if (random > 0.5) {
  unknownObject = await jsonFile("a");
} else {
  unknownObject = await jsonFile("b");
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is ${path.sep}`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const myServer = createServerHttp((_, res) => {
  res.end("Request accepted");
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log("To terminate it, use Ctrl+C combination");
});

export { unknownObject, myServer };