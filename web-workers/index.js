import { complexOperation } from "./utils";
const worker = new Worker("web-worker.js");

const webWorkerComplexTask = () => {
  worker.postMessage({});

  worker.onmessage = (event) => {
    console.log(event.data);
  };
};

window.complexOperation = complexOperation;
window.webWorkerComplexTask = webWorkerComplexTask;
