const { parentPort, workerData } = require('worker_threads');

function compute(array) {
    let result = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 3 === 0) {
            result++;
        }
    }
    return result;
}

parentPort.postMessage(compute(workerData.array))