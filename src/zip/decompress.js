import zlib from "node:zlib";
import fs from "node:fs";

const decompress = async () => {
  const zip = zlib.createGunzip();

  const read = fs.createReadStream("files/archive.gz");
  const write = fs.createWriteStream("files/fileToCompress.txt");

  read.pipe(zip).pipe(write);
};

await decompress();
