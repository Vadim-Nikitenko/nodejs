/**
 * To make it work run one of command:
 * node ./index.js '1h 5m 10s'
 * node ./index.js '1m'
 * node ./index.js 10s
 */
const notifier = require('node-notifier');
const {join} = require("node:path");

let timeString = process.argv[2];

if (timeString === undefined) {
    throw new Error(`Usage: node ./index.js '1h 5m 10s'`);
}

function timeStringToMillis(timeString) {
    const timeUnits = {h: 3600000, m: 60000, s: 1000};

    const regex = /(-?\d+)([hms])/g;
    const matches = timeString.matchAll(regex);

    let totalMilliseconds = 0;
    for (const match of matches) {
        const value = parseInt(match[1], 10);
        const unit = match[2];
        if (value < 0) {
            throw new Error(`Invalid time value: ${match[0]}`);
        }
        totalMilliseconds += value * timeUnits[unit];
    }

    return totalMilliseconds;
}
const timeout = timeStringToMillis(timeString);

setTimeout(() => {
    console.log(`Done after timeout: ${timeout} milliseconds`);
    notifier.notify({
        title: 'Timer finished',
        message: `After ${timeout} milliseconds!`,
        icon: join(__dirname, 'timer.png')
    });
}, timeout);
