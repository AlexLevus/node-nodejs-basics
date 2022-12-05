import { execFile } from "node:child_process";

const spawnChildProcess = async (args) => {
  const child = execFile("node", args);
  process.stdin.pipe(child.stdin);
  child.stdout.pipe(process.stdout);
};

// Put your arguments in function call to test this functionality
spawnChildProcess(["./files/script.js", "--version"]);
