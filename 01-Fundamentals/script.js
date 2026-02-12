/*
let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Jonas")
console.log(23)

let firstName = "Jonas"
console.log(firstName)
console.log(firstName)
console.log(firstName)
*/

// Data Types:
/*
let javaScriptIsFun = true;

console.log(javaScriptIsFun)
console.log(typeof javaScriptIsFun)


javaScriptIsFun = "YES!"

console.log(typeof javaScriptIsFun)

let year;
console.log(year)
console.log(typeof year)

year = 1991;
console.log(typeof year)



let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;

// const job;

var job = "programmer";
job = "teacher";

console.log(job)

*/

// Math Operators:

/*
const currentYear = 2037;
const ageJonas = currentYear - 1991;
const ageSarah = currentYear - 2020;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3;

// we can use '+' operator to concatenate strings

const firstName = "Jonas";
const lastName = "Schmedtmann"
console.log(firstName + ' ' + lastName);

// assignment operators:
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1;
x--; // x = x - 1;
x--
console.log(x);


//Comparison Operators:
console.log(ageJonas > ageSarah); // >, <, >=, <=;
console.log(ageSarah >= 18)

const isFullAge = ageSarah >= 18;
console.log(currentYear - 1991 > currentYear - 2018)
*/

// Operator Precedence:

/*

const currentYear = 2037;
const ageJonas = currentYear - 1991;
const ageSarah = currentYear - 2020;

console.log(currentYear - 1991 > currentYear - 2018)

let x, y;

x = y = 25 - 10 - 5;
console.log(x, y)
const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah)
console.log(averageAge)

*/

//Strings and Template literals:
/*

const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991
const currentYear = 2037;

const jonas = "I'm " + firstName + ", a " + (currentYear - birthYear) + " year old " + job + "!";

console.log(jonas)

const jonasNew = `I'm ${firstName}, a ${currentYear - birthYear} year old ${job}!`

console.log(jonasNew)

console.log("String \n\
    with \n\
    multiple lines");

console.log(`String
    with
    multiple lines`)

*/

// if/else statements

/*
const age = 15;

//const isOldEnough = age >= 18;

if (age >= 18) {
    console.log("Sarah can start driving license 🚗")
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. wait another ${yearsLeft} years :)`)
}


const birthYear = 1991;
let century;
if (birthYear <= 2000) {
    century = 20
} else {
    century = 21
}

console.log(century)

*/

// Type Conversion and Coercion:

/*

//type conversion:
const inputYear = "1991";
console.log(Number(inputYear), inputYear)
console.log(Number(inputYear) + 18);

console.log(Number("Jonas"));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
console.log('I am ' + 23 + ' years old')
console.log('23' - '10' - 3);
console.log("23" * "2")
console.log("23" / "2")

let n = '1' + 1;
n = n - 1;
console.log(n);
*/

// Truthy and Flasy values: 

// 5 falsy values: 0, '', NaN, undefined, null

console.log(Boolean(0))
console.log(Boolean(undefined))
console.log(Boolean("Jonas"))
console.log(Boolean({}))
console.log(Boolean(''))

const money = 0;

if (money) {
    console.log(`Don't spend it all!`)
} else {
    console.log(`You should get a job!`)
}

let height;

if (height) {
    console.log(`YAY! height is defined`)
} else {
    console.log(`height is undefined`)
}