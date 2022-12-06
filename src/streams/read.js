import { createReadStream } from "fs";

const read = async () => {
  const filePath = new URL("files/fileToRead.txt", import.meta.url);
  const readStream = createReadStream(filePath);

  let rawData = "";
  readStream.on("data", (chunk) => {
    rawData += chunk;
  });

  readStream.on("end", () => {
    process.stdout.write(rawData);
  });
};

await read();
