/**
 * run example `node .\index.js 2 2 divide`
 */
const num1 = process.argv[2];
const num2 = process.argv[3];
const operation = process.argv[4];

const availableOperations = ['add', 'subtract', 'divide', 'multiply']

if (num1 === undefined || num2 === undefined || operation === undefined) {
    throw new Error(`Not all arguments passed. Usage example: node ./filename.js 2 2 add`);
}

const parsedNum1 = parseInt(num1);
const parsedNum2 = parseInt(num2);

if (isNaN(parsedNum1) || isNaN(parsedNum2)) {
    throw new Error(`Invalid arguments. Arguments ${num1} and ${num2} must be a numbers`);
}

if (!availableOperations.includes(operation)) {
    throw new Error(`Unsupported operation: ${operation}. Use add, divide, subtract or multiply`);
}

const operationUnit = require(`./${operation}`);
console.log(`Adding ${parsedNum1} to ${parsedNum2} = ${operationUnit(parsedNum1, parsedNum2)}`);