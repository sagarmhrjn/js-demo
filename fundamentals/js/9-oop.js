/**
 * Object oriented in Javascript
 * 
 * dob dates, Oject prototypes
 * */
// Constructor function 
function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = dob;

    this.getFullName = function () {
        return `${this.firstName} ${this.lastName}`
    }
}


// Person.prototype.getFullName = function () {
//     return `${this.firstName} ${this.lastName}`

// }
// Instantiate object
const person1 = new Person('Sagar', 'Maharjan', 28)

console.log(person1)