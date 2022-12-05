import { readFile } from "node:fs/promises";

const read = async () => {
  try {
    console.log(await readFile("files/fileToRead.txt", "utf-8"));
  } catch (e) {
    throw new Error("FS operation failed");
  }
};

await read();
