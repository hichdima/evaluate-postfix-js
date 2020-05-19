# evaluate-postfix-expression-js
### An algorithm that evaluates postfix expression using stack in javascript.

1. We have a postfix string as our input (e.g "921*-8-4+").
1. As we parse the string char by char whenever we meet an integer we push it into our stack.
1. Once we meet an operator (+,-,*,/) we pop two items from our stack, then we perform a mathematical operation between two integers with the operator we have.
1. Then we push the result to our stack and continue to parse the string till the end.
