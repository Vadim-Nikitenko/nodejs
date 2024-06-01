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

switch (operation) {
    case 'add':
        const add = require('./add');
        console.log(`Adding ${num1} to ${num2} = ${add(num1, num2)}`);
        return;
    case 'divide':
        const divide = require('./divide');
        console.log(`Dividing ${num1} by ${num2} = ${divide(num1, num2)}`);
        return;
    case 'subtract':
        const subtract = require('./subtract');
        console.log(`Subtract ${num2} from ${num1} = ${subtract(num1, num2)}`);
        return;
    case 'multiply':
        const multiply = require('./multiply');
        console.log(`Multiplying ${num1} by ${num2} = ${multiply(num1, num2)}`);
        return;
    default:
        console.error(`Unsupported operation: ${operation}. Use add, divide, subtract or multiply`);
}