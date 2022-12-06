import zlib from "node:zlib";
import fs from "node:fs";

const compress = async () => {
  const zip = zlib.createGzip();

  const filePathToCompress = new URL("files/fileToCompress.txt", import.meta.url);
  const filePathToArchive = new URL("files/archive.gz", import.meta.url);

  const read = fs.createReadStream(filePathToCompress);
  const write = fs.createWriteStream(filePathToArchive);

  read.pipe(zip).pipe(write);
};

await compress();
