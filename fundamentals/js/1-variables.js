/**
 * Variables are containers for storing the data, declared in 4 ways, var, const and let
 * 
 * When to Use var, let, or const?
 * 
 * Always use const if the value should not be changed
 * Always use const if the type should not be changed (Arrays and Objects)
 * Only use let if you can't use const
 * Only use var if you MUST support old browsers.
 * */

const myName = 'Sagar'
let lastNmae = 'Maharjan'

myName = 'uttam'

console.log(myName)


const debitCard = 'sunrise'

debitCard = 'nabil'