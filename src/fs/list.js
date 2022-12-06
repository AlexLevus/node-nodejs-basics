import { readdir } from "node:fs/promises";

const list = async () => {
  try {
    const dirPath = new URL("files", import.meta.url);
    console.log(await readdir(dirPath));
  } catch (e) {
    throw new Error("FS operation failed");
  }
};

await list();
