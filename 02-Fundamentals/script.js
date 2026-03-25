'use strict';

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :)')

// const interface = "Audio"
// const private = 534;
*/

/*

function logger() {
    console.log("My name is Jonas")
}
// calling / runing / invoking
logger()
logger()
logger()
logger()

function fruitProcessor(apples, oranges) {
    const juice = `juice with ${apples} apples and ${oranges} oranges`

    return juice

}

// capturing the returned value from the function
const appleJuice = fruitProcessor(5, 0)
console.log(appleJuice)

// not capturing the value
console.log(fruitProcessor(5, 0))

const appleOrangeJuice = fruitProcessor(2, 4)
console.log(appleOrangeJuice)

// built in function

const num = Number("23");
console.log(num)

*/

/*

// function declaration and expression
// Parameter: is the place holder in the function
// Argument: is the actual value that we use to fill in the place holder

// function declaration:

function calcAge1(birthYear) {
    return 2026 - birthYear
}

const age1 = calcAge1(1996)


// function expression:

const calcAge2 = function (birthYear) {
    return 2026 - birthYear
}

const age2 = calcAge2(1993)

console.log(age1, age2)

*/

// Arrow Function:

/*

const calcAge3 = birthYear => 2026 - birthYear

const age3 = calcAge3(1991)

console.log(age3)

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2026 - birthYear
    const retirement = 65 - age
    // return retirement
    return `${firstName} retires in ${retirement} years`
}

console.log(yearsUntilRetirement(1996, 'jonas'))
console.log(yearsUntilRetirement(1993, 'behnoud'))

*/

//Function Calling other functions:

/*

function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {

    const applePieces = cutFruitPieces(apples)
    const orangePieces = cutFruitPieces(oranges)

    const juice = `juice with ${applePieces} pieces of apple and ${orangePieces} pieces of oranges`

    return juice

}
console.log(fruitProcessor(2, 3))

*/

/*
const calcAge = function (birthYear) {
    return 2026 - birthYear
}
const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear)
    const retirement = 65 - age
    return retirement > 0 ? `${firstName} retires in ${retirement} years` : `${firstName} is retired`
    // return retirement

}

console.log(yearsUntilRetirement(1996, "Behnoud"))

*/
