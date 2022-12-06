import { rename as rn, access } from "node:fs/promises";

const rename = async () => {
  try {
    const oldFilePath = new URL("files/wrongFilename.txt", import.meta.url);
    const newFilePath = new URL("files/properFilename.md", import.meta.url);

    access(newFilePath)
      .then(() => {
        throw new Error("FS operation failed");
      })
      .catch(() => {});

    await rn(oldFilePath, newFilePath);
  } catch (e) {
    throw new Error("FS operation failed");
  }
};

await rename();
