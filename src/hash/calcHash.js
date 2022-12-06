import crypto from "node:crypto";
import { readFile } from "node:fs/promises";

const calculateHash = async () => {
  const filePath = new URL("files/fileToCalculateHashFor.txt", import.meta.url);
  const fileBuffer = await readFile(filePath);
  const hashSum = crypto.createHash("sha256");
  hashSum.update(fileBuffer);

  const hex = hashSum.digest("hex");
  console.log(hex);
};

await calculateHash();
