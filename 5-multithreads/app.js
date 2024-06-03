const {performance} = require("perf_hooks");

function computeSync(length) {
    const array = [];

    for (let i = 1; i <= length; i++) {
        array.push(i);
    }

    let result = 0;
    performance.mark('start');
    for (let i = 0; i < array.length; i++) {
        if (i % 3 === 0) {
            result++;
        }
    }
    performance.mark('end');
    performance.measure('compute', 'start', 'end');
    return result;
}

function main(arrLength) {
    return {
        count: computeSync(arrLength),
        duration: performance.getEntriesByName('compute').pop().duration
    };
}

module.exports = main;