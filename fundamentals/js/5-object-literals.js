/**
 * Object literals
 * 
 * Store collections of data, 
 * Represent complex data structures such as objects, arrays, functions, and even regular expressions. 
 * Store information about a particular instance of an object, such as its state or behavior.
 * Written in the form of key-value pairs, where each key is a string and each value can be any valid js data type. 
 * 
 * Accessing values from the object, Destructuring, add and replace value
 * */

const person = {
    firstName: 'Sagar',
    lastName: 'Maharjan',
    age: 28,
    hobbies: ['Music', 'Movies', 'Beer'],
    address: {
        city: 'Patan',
        state: 'Lalipur',
        street: 'Sundhara'
    },
    greet: function () {
        console.log('Hello, my name is ' + this.firstName);
    }
}


console.log(person.greet())