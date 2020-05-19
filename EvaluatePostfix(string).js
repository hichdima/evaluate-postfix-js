const Stack = require("./src/Stack.js");

const exp = "921*-8-4+";

const evaluatePostfix = (exp) => {
    let operators = ["+", "-", "*", "/"]
    let stack = new Stack;
    let a, b;

    for (let i = 0; i <= exp.length - 1; i++) {
        let currChar = exp.charAt(i);

        if(!operators.includes(currChar)) {
            // TODO: check if current char is an integer
            stack.push(currChar);
        } else {
            a = stack.pop();
            b = stack.pop();

            stack.push(eval(b + currChar + a));
        }
    }

    return stack.pop();
}

console.log(evaluatePostfix(exp));