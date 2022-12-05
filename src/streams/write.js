import { createWriteStream } from "fs";

const write = async () => {
  const writeStream = createWriteStream("files/fileToWrite.txt");

  process.stdin.on("data", (chunk) => {
    writeStream.write(chunk);
  });

  process.stdin.on("end", () => {
    writeStream.end();
  });
};

await write();
