const emitter = require('./emitter');

emitter.on('subtract', (num1, num2) => {
    console.log(`Subtract ${num2} from ${num1} = ${num1 - num2}`);
})