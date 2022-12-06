import { readFile } from "node:fs/promises";

const read = async () => {
  try {
    const filePath = new URL("files/fileToRead.txt", import.meta.url);
    console.log(await readFile(filePath, "utf-8"));
  } catch (e) {
    throw new Error("FS operation failed");
  }
};

await read();
