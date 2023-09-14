/**
 * Array of objects
 * 
 * Accessing, changing, stringify, loops(for, while, for..of)
 * */
const todos = [
    {
        id: 1,
        text: 'Meeting with boss',
        isCompleted: false
    },
    {
        id: 2,
        text: 'Take out the trash',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist appointment',
        isCompleted: false
    }
]


console.log(todos)
// classic for loop
// for (let i = 0; i < todos.length; i++) {
//     console.log(todos[i])
// }

// while
// let i = 0
// while (i < todos.length) {
//     console.log(todos[i])
//     i++
// }

// for..of
// for (let todo of todos) {
//     console.log(todo)
// }

// const transformedArray = todos.filter(function (todo) {
//     return todo.text === 'Take out the trash'
// }).map(function (todo) {
//     return todo.text
// })

// console.log(transformedArray)
/**
 * Higher order functions are functions that operate on other functions, either by receiving them as arguments or by returning them. 
 * It is a function that accepts a function as a parameter or returns a function as the output.
 * 
 * forEach, map, filter
 * */


const randString = 'abba'