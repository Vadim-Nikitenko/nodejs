const main = require('./app');
const mainAsync = require('./app_async');

/**
 * run `node ./index.js`
 */
async function run() {
    const arrLength = 300000;
    const sync = main(arrLength);
    const async = await mainAsync(arrLength);

    console.assert(sync.count === async.count);
    console.log(`В одном потоке: ${sync.duration}
В несколько потоков: ${async.duration}`);
}

run();