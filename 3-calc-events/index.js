/**
 * run example `node .\index.js 2 2 divide`
 */

const emitter = require('./emitter');

const num1 = process.argv[2];
const num2 = process.argv[3];
const operation = process.argv[4];
const availableOperations = require('./constant');

if (num1 === undefined || num2 === undefined || operation === undefined) {
    console.error("Usage: node filename <num1> <num2> <operation>");
    return;
}

const parsedNum1 = parseInt(num1);
const parsedNum2 = parseInt(num2);

if (isNaN(parsedNum1) || isNaN(parsedNum2)) {
    console.error("Invalid arguments: <num1> <num2> must be a number");
    return;
}

if (!availableOperations.filter(o => o.operation === operation)) {
    throw new Error(`Unsupported operation: ${operation}. Use add, divide, subtract or multiply`);
}

emitter.emit(operation, parsedNum1, parsedNum2);