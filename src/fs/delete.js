import { unlink } from "node:fs/promises";

const remove = async () => {
  try {
    const filePath = new URL("files/fileToRemove.txt", import.meta.url);
    await unlink(filePath);
  } catch (e) {
    throw new Error("FS operation failed");
  }
};

await remove();
