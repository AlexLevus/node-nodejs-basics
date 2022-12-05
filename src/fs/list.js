import { readdir } from "node:fs/promises";

const list = async () => {
  try {
    console.log(await readdir("files1"));
  } catch (e) {
    throw new Error("FS operation failed");
  }
};

await list();
