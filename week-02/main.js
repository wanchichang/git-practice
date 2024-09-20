// TODO 以 Module 的方式匯入，例如:
import Stack from './stack.js'

let stack = new Stack()
stack.print()

stack.push(5)
stack.push(8)
stack.print()
console.log(stack.pop())
stack.print()
console.log(stack.peek())
