import { Worker } from "worker_threads";
import os from "os";
import { fileURLToPath } from 'url';

const performCalculations = async () => {
  const cpu = os.cpus().length;
  let allWorkers = [];
  const __filename = fileURLToPath(import.meta.url);

  for (let i = 0; i < cpu; i++) {
    const promise = new Promise((resolve, reject) => {
      const workerFilePath = new URL("./worker.js", import.meta.url).pathname;
      const worker = new Worker(workerFilePath);
      worker.postMessage(10 + i);

      worker.on("message", (result) => {
        resolve({ status: "resolved", data: result });
      });

      worker.on("error", (error) => {
        console.error(`${error.message}`);
        resolve({ status: "error", data: null });
      });

      worker.on("exit", (code) => {
        if (code !== 0) {
          reject(new Error(`Worker stopped with exit code ${code}`));
        }
      });
    });

    allWorkers.push(promise);
  }

  const res = await Promise.all(allWorkers);
  console.log(res);
};

performCalculations();
