import { rename as rn, access } from "node:fs/promises";

const rename = async () => {
  try {
    access("files/properFilename.md")
      .then(() => {
        throw new Error("FS operation failed");
      })
      .catch(() => {});

    await rn("files/wrongFilename.txt", "files/properFilename.md");
  } catch (e) {
    throw new Error("FS operation failed");
  }
};

await rename();
