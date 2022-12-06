import { Worker } from "node:worker_threads";
import os from "node:os";

const performCalculations = async () => {
    const filePath = new URL("worker.js", import.meta.url);

    const workers = [];
  for (let i = 0; i < os.cpus().length; i++) {
    workers.push(
      new Promise((resolve, reject) => {
        const worker = new Worker(filePath, { workerData: 10 + i });
        worker.on("message", resolve);
        worker.on("error", reject);
      })
    );
  }

  const result = await Promise.allSettled(workers);
  return result.map((res) => ({
    status: res.status === "fulfilled" ? "resolved" : "error",
    data: res.values,
  }));
};

await performCalculations();
