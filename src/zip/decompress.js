import zlib from "node:zlib";
import fs from "node:fs";

const decompress = async () => {
  const zip = zlib.createGunzip();

  const filePathToArchive = new URL("files/archive.gz", import.meta.url);
  const filePathToDecompress = new URL("files/fileToCompress.txt", import.meta.url);

  const read = fs.createReadStream(filePathToArchive);
  const write = fs.createWriteStream(filePathToDecompress);

  read.pipe(zip).pipe(write);
};

await decompress();
