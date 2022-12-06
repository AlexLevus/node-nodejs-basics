import { createWriteStream } from "fs";

const write = async () => {
  const filePath = new URL("files/fileToWrite.txt", import.meta.url);
  const writeStream = createWriteStream(filePath);

  process.stdin.on("data", (chunk) => {
    writeStream.write(chunk);
  });

  process.stdin.on("end", () => {
    writeStream.end();
  });
};

await write();
