// TODO 以 Module 的方式匯入，例如:
import Stack from './stack.js'

let stack = new Stack()

// check initial state
// test stack.isEmpty(), stack.size()
console.log('\nCheck initial state: \n')
console.log(`Is the stack empty? ${stack.isEmpty()}`)
console.log('Print the elements in the stack: ')
stack.print()
console.log(`Size of stack is: ${stack.size()}`)
console.log('=================\n')

// test stack.push()
console.log('push 5 into stack')
stack.push(5)
console.log(`Is the stack empty? ${stack.isEmpty()}`)
stack.print()
console.log(`Size of stack is: ${stack.size()}\n`)

// test stack.push()
console.log('Push 10 into stack')
stack.push(10)
stack.print()
console.log(`Size of stack is: ${stack.size()}`)

// test stack.peek()
console.log(`The top element of the stack is ${stack.peek()}\n`)

// test stack.push()
console.log('Push 3 into stack')
stack.push(3)
stack.print()
console.log(`Size of stack is: ${stack.size()}\n`)

// test stack.pop()
console.log(`Pop ${stack.pop()} from stack`)
stack.print()
console.log(`Size of stack is: ${stack.size()}\n`)
console.log('\n==================\n')

// test stack.clear()
console.log('Clear the stack\n')
stack.clear()

console.log(`Is the stack empty? ${stack.isEmpty()}`)
// test peek(), pop(), print() when stack is empty
console.log(`The top element of the stack is ${stack.peek()}\n`)
console.log('Pop element from stack: ')
console.log(stack.pop())
console.log('\nPrint the elements in the stack: ')
stack.print()
