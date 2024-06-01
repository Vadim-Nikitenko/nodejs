const emitter = require('./emitter');

emitter.on('add', (num1, num2) => {
    console.log(`Adding ${num1} to ${num2} = ${num1 + num2}`);
});