import path from "node:path";
import { release, version } from "node:os";
import { createServer as createServerHttp } from "node:http";
import { URL } from "node:url";
import { createRequire } from "node:module";
import "./files/c.js";

const random = Math.random();

const require = createRequire(import.meta.url);

let unknownObject;
if (random > 0.5) {
  unknownObject = require("./files/a.json");
} else {
  unknownObject = require("./files/b.json");
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${new URL("", import.meta.url).pathname}`);
console.log(
  `Path to current directory is ${new URL(".", import.meta.url).pathname}`
);

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
