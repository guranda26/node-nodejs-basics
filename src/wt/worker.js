import { parentPort } from "worker_threads";

const nthFibonacci = (n) =>
  n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = (result) => {
  parentPort.postMessage(result);
};

parentPort.on("message", (n) => {
  const result = nthFibonacci(n);
  sendResult(result);
});
