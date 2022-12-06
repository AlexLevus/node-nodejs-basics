import { fork } from "node:child_process";

const spawnChildProcess = async (args) => {
  const filePath = new URL("files/script.js", import.meta.url);
  const forkProcess = fork(filePath, args);

  forkProcess.on("message", (msg) => {
    process.stdout.write(msg);
  });

  forkProcess.on("data", (data) => {
    forkProcess.send(data);
  });
};

// Put your arguments in function call to test this functionality
spawnChildProcess(["--version"]);
