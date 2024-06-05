const EventEmitter = require('events');
const availableOperations = require('./constant');
const emitter = new EventEmitter();

availableOperations.forEach(o => emitter.on(o.operation, (num1, num2) => {
    console.log(`${o.operation}: ${num1} ${o.symbol} ${num2} = ${eval(`${num1} ${o.symbol} ${num2}`)}`);
}))

module.exports = emitter;