const emitter = require('./emitter');

emitter.on('divide', (num1, num2) => {
    console.log(`Dividing ${num1} by ${num2} = ${num1 / num2}`);
})