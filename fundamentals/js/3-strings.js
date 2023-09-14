/**
 * Javascript strings
 * 
 * JavaScript strings are for storing and manipulating text.
 * 
 * Concatenation, template strings, 
 * 
 * Properties and methods: length, toUpperCase, substr, split
 * */

const myName = 'Sagar';
const age = 28

// Concatenation
console.log('My name is ' + myName + 'and I am' + age)

// Template strings
console.log(`My name is ${myName} and I am ${age}`)

const random = 'pizza, burger, fries'
console.log(random.split(', '))