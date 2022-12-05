import crypto from "node:crypto";
import { readFile } from "node:fs/promises";

const calculateHash = async () => {
  const fileBuffer = await readFile("files/fileToCalculateHashFor.txt");
  const hashSum = crypto.createHash("sha256");
  hashSum.update(fileBuffer);

  const hex = hashSum.digest("hex");
  console.log(hex);
};

await calculateHash();
