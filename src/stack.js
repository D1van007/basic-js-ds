const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example

 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */

//  const stack = new Stack();
let stack = []
class Stack {
  
  push(element) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
return  stack.push(element)


 
  }

  pop() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

  return stack.pop()
  }

  peek() {

 let popped = stack.pop()
 stack.push(popped)
 return popped
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

  }
}

module.exports = {
  Stack
};
