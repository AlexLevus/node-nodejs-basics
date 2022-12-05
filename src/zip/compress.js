import zlib from "node:zlib";
import fs from "node:fs";

const compress = async () => {
  const zip = zlib.createGzip();

  const read = fs.createReadStream("files/fileToCompress.txt");
  const write = fs.createWriteStream("files/archive.gz");

  read.pipe(zip).pipe(write);
};

await compress();
