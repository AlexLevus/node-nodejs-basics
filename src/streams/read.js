import { createReadStream } from "fs";

const read = async () => {
  const readStream = createReadStream("files/fileToRead.txt");

  let rawData = "";
  readStream.on("data", (chunk) => {
    rawData += chunk;
  });

  readStream.on("end", () => {
    process.stdout.write(rawData);
  });
};

await read();
