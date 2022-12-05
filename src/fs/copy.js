import { cp } from "node:fs/promises";

const copy = async () => {
  try {
    await cp("files", "files_copy", {
      recursive: true,
      errorOnExist: true,
      force: false,
    });
  } catch (e) {
    throw new Error("FS operation failed");
  }
};

await copy();
