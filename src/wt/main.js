import { Worker } from "worker_threads";
import os from "os";

const performCalculations = async () => {
  const cpu = os.cpus().length;
  let allWorkers = [];

  for (let i = 0; i < cpu; i++) {
    const promise = new Promise((resolve, reject) => {
      const worker = new Worker("./worker.js");
      worker.postMessage(10 + i);

      worker.on("message", (result) => {
        resolve({ status: "resolved", data: result });
      });

      worker.on("error", (error) => {
        console.error(`${error.message}`);
        resolve({ status: "error", data: null });
      });
    });

    allWorkers.push(promise);
  }

  const res = await Promise.all(allWorkers);
  console.log(res);
};

performCalculations();
