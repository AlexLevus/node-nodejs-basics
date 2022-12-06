import { cp } from "node:fs/promises";

const copy = async () => {
  try {
    const dirPath = new URL("files", import.meta.url);
    const destDirPath = new URL("files_copy", import.meta.url);
    await cp(dirPath, destDirPath, {
      recursive: true,
      errorOnExist: true,
      force: false,
    });
  } catch (e) {
    throw new Error("FS operation failed");
  }
};

await copy();
