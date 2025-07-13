const args = process.argv.slice(2);

if (args.length !== 3) {
    console.log("Usage: node calculator.js <number1> <operation> <number2>");
    process.exit(1);
}

const [num1Input, op, num2Input] = args;

const num1 = parseFloat(num1Input);
const num2 = parseFloat(num2Input);

let result;

switch (op) {
    case "+":
        result = num1 + num2;
        break;
    case "-":
        result = num1 - num2;
        break;
    case "*":
        result = num1 * num2;
    case "/":
        if (num2 === 0) {
            console.log("Can't divide 0");
            process.exit(1);
        }
        result = num1 / num2;
        break;
    default:
        process.exit(1);
}

console.log(`${num1} ${op} ${num2} = ${result}`);

