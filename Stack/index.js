// import { Stack } from "./Stack.js" // named exports
// import Stack from "./Stack.js" // default exports == add *default export*
// import * as Stack from "./Stack.js"
import { Stack } from "./Stack.js"

const stack = new Stack()

stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.peek()); // Expected output: 30
console.log(stack.pop());  // Expected output: 30
console.log(stack.peek()); // Expected output: 20
console.log(stack.isEmpty()); // Expected output: false
console.log(stack.size()); // Expected output: 2
stack.clear();
console.log(stack.isEmpty()); // Expected output: true

