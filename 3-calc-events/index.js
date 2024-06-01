const emitter = require('./emitter');

let num1 = process.argv[2];
let num2 = process.argv[3];
let operation = process.argv[4];

if (num1 === undefined || num2 === undefined || operation === undefined) {
    console.error("Usage: node filename <num1> <num2> <operation>");
    return;
}

num1 = parseInt(num1);
num2 = parseInt(num2);

if (isNaN(num1) || isNaN(num2)) {
    console.error("Invalid arguments: <num1> <num2> must be a number");
    return;
}

function emit() {
    emitter.emit(operation, num1, num2);
}

switch (operation) {
    case 'add':
        require('./add');
        emit();
        return;
    case 'divide':
        require('./divide');
        emit();
        return;
    case 'subtract':
        require('./subtract');
        emit();
        return;
    case 'multiply':
        require('./multiply');
        emit();
        return;
    default:
        console.error(`Unsupported operation: ${operation}. Use add, divide, subtract or multiply`);
}