/**
 * Array is a special variable, which can hold more than one value
 * 
 * Creating, Accessing, Changing, Methods(push, unshift, pop, indexOf)
 * */

// Using constructor function
const numbers = new Array(1, 2, 3, 4, 5)

const fruits = ['oranges', 'mangoes', 'apples', true, 1]

fruits[1] = 'Uttam'

// fruits.push('grapes')
fruits.unshift('pineapple')
fruits.pop()
console.log(fruits)
// const name:string // typescript superset of javascript