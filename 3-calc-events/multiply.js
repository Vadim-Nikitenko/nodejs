const emitter = require('./emitter');

emitter.on('multiply', (num1, num2) => {
    console.log(`Multiplying ${num1} by ${num2} = ${num1 * num2}`);
})