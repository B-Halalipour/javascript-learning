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

// function declaration and expression
// Parameter: is the place holder in the function
// Argument: is the actual value that we use to fill in the place holder

function calcAge1(birthYear) {
    return 2026 - birthYear
}

const BehnoudAge = calcAge1(1996)