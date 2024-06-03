const os = require('os');
const {performance} = require("perf_hooks");
const {Worker} = require("worker_threads");

function prepareArray(arrLength) {
    const initialArray = [];
    for (let i = 1; i <= arrLength; i++) {
        initialArray.push(i);
    }

    const parts = os.cpus().length;
    const chunkSize = Math.ceil(arrLength / parts);
    const result = [];
    let index = 0;

    for (let i = 0; i < parts; i++) {
        if (index >= arrLength) {
            break;
        }
        result.push(initialArray.slice(index, index + chunkSize));
        index += chunkSize;
    }

    return result;
}


function compute(array) {
    return new Promise((resolve, reject) => {
        const worker = new Worker('./worker.js', {
            workerData: {
                array
            },
        });
        worker.on('message', (msg) => {
            resolve(msg);
        });
    });
}

const mainAsync = async (arrLength) => {
    let array = prepareArray(arrLength);
    performance.mark('start async');
    const result = await Promise.all(array.map(async (subArr) => compute(subArr)));
    performance.mark('end async');
    performance.measure('compute async', 'start async', 'end async');

    return {
        count: result.reduce((sum, current) => sum + current, 0),
        duration: performance.getEntriesByName('compute async').pop().duration
    };
}

module.exports = mainAsync;