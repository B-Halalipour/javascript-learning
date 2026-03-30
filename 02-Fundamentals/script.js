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

// Arrays:
/*

const friend1 = "Michael"
const friend2 = "Steven"
const friend3 = "Peter"

const friends = ["Michael", "Steven", "Peter"]

console.log(friends)

// const years = new Array(1991, 1984, 2000, 2020);

console.log(friends[0])
console.log(friends[2])

console.log(friends.length)
console.log(friends[friends.length - 1])

friends[2] = "Jay"
console.log(friends)

const firstName = "Behnoud"
const behnoud = [firstName, "Halalipour", 2026 - 1996, "barista", friends]
console.log(behnoud)

//Exercise:

const calcAge = function (birthYear) {
    return 2026 - birthYear;
}

const years = [1990, 1976, 2002, 2010, 2018]

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])]

console.log(ages)

*/

/*
const friends = ["Michael", "Steven", "Peter"]

//add elements:
// "push" methode adds the element to the end of the array

const newLength = friends.push("Jay")

// "unshift" methode adds the element to the begining of the array
friends.unshift("John")

console.log(friends)
console.log(newLength)


// removing elemenet from the array:
// removing from end of the array
friends.pop();
console.log(friends);
const popped = friends.pop()
console.log(friends);
console.log(popped );
//removing from begining of the array
friends.shift();
console.log(friends);

// finding the position of a certain element in the array
console.log(friends.indexOf("Steven"));

console.log(friends.indexOf("Bob"));

friends.push(23);

// checking in certain element exists in our array or not
console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));
console.log(friends.includes("23"));


if (friends.includes("Steven")) {
    console.log("You have a friend called Steven");
}

*/

// Objects:
/*
const behnoud = {
    firstName: "Behnoud",
    lastName: "Halalipour",
    age: 2026 - 1996,
    job: "barista",
    friends: ["Maya", "Devin", "Ashkan"]
}
console.log(behnoud);
console.log(behnoud.lastName);
console.log(behnoud["lastName"]);

const nameKey = "Name"
console.log(behnoud["first" + nameKey]);
console.log(behnoud["last" + nameKey]);

const interestedIn = prompt("What do you want to know about behnoud? choose between firstName, lastName, age, job and friends" )

console.log(interestedIn);

if(behnoud[interestedIn]) {
    console.log(behnoud[interestedIn]);
} else {
    console.log("Wrong request! choose between firstName, lastName, age, job and friends");
}

behnoud.location = "Scotland";
behnoud.instagram = "@behnoudhalalipour"
console.log(behnoud);

// challenge:
//behnoud has 3 friends and his best friend is maya

const firstName = behnoud.firstName;
const numberOfFriends = behnoud.friends.length;
const bestFriend = behnoud.friends[0]

console.log(`${firstName} has ${numberOfFriends} friends and his best friend is ${bestFriend}`);

*/

/*


const behnoud = {
    firstName: "Behnoud",
    lastName: "Halalipour",
    birthYear: 1996,
    job: "barista",
    friends: ["Maya", "Devin", "Ashkan"],
    hasDrivingLicense: false,

    // calcAge: function(birthYear) {
    //     return 2026 - birthYear
    // }


    // calcAge: function() {
    //     // console.log(this);
    //     return 2026 - this.birthYear
    // }

    calcAge: function() {
        // console.log(this);
        this.age = 2026 - this.birthYear
        return this.age
    },
    // my solution for the challenge:

    
    // getSummery: function() {
    //     return this.hasDrivingLicense ?`${this.firstName} is a ${this.age} year old ${this.job}, and he has a driving license` : `${this.firstName} is a ${this.age} year old ${this.job}, and he doesn't have a driving license`
    // } 


    // jonas solution:

    getSummery: function() {
        return `${this.firstName} is a ${this.calcAge()} year old ${this.job}, and he has ${this.hasDrivingLicense ? 'a' : "no"} driving license`
    }

    
}

// console.log(behnoud.calcAge(behnoud.birthYear));
console.log(behnoud.calcAge());
console.log(behnoud.getSummery());

console.log(behnoud.age);
console.log(behnoud.age);
console.log(behnoud.age);

// challenge:
// jonas is a 46 year old teacher. and he has a/no drivers license

*/

/*
// Iteration: The For Loop:

// console.log("Lifting weight repetition 1 🏋🏻‍♂️");
// console.log("Lifting weight repetition 2 🏋🏻‍♂️");
// console.log("Lifting weight repetition 3 🏋🏻‍♂️");
// console.log("Lifting weight repetition 4 🏋🏻‍♂️");
// console.log("Lifting weight repetition 5 🏋🏻‍♂️");
// console.log("Lifting weight repetition 6 🏋🏻‍♂️");
// console.log("Lifting weight repetition 7 🏋🏻‍♂️");
// console.log("Lifting weight repetition 8 🏋🏻‍♂️");
// console.log("Lifting weight repetition 9 🏋🏻‍♂️");
// console.log("Lifting weight repetition 10 🏋🏻‍♂️");

// for loops keep runnign while condition is true

for(let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weight repetition ${rep} 🏋🏻‍♂️`);
}

*/
/*

const jonasArray = [
    "jonas",
    "Schmedtmann",
    2037 - 1991,
    "teacher",
    ["Michael", "Peter", "Steven"]
]
const type = []

for(let i = 0; i < jonasArray.length; i++) {
    // type[i] = typeof jonasArray[i]
    type.push(typeof jonasArray[i])
    console.log(jonasArray[i]);
}

console.log(type);

const years = [1991, 2007, 1969, 2020];

const ages = [];

for(let i = 0; i < years.length; i++) {
    ages.push(2026 - years[i])
}

console.log(ages);

// continue and break
console.log("--- ONLY STRINGS ---");
for(let i = 0; i < jonasArray.length; i++) {
    if(typeof jonasArray[i] !== "string") continue;
   
    console.log(jonasArray[i]);
}

console.log("--- BREAK WITH NUMBER ---");
for(let i = 0; i < jonasArray.length; i++) {
    if(typeof jonasArray[i] === "number") break;
   
    console.log(jonasArray[i]);
}

*/


/*
// Looping Backwards and Loop in Loop:


const jonasArray = [
    "jonas",
    "Schmedtmann",
    2037 - 1991,
    "teacher",
    ["Michael", "Peter", "Steven"]
]

const reverseJonas = []

for (let i = jonasArray.length -1; i >= 0; i--) {
    reverseJonas.push(jonasArray[i])
}

console.log(reverseJonas);

const reverseJonas2 = []
for(let i = 0; i < jonasArray.length; i++) {
    reverseJonas2.unshift(jonasArray[i])
}

console.log(reverseJonas2);


for(let exercise = 1; exercise <= 3; exercise++) {
    console.log(`-------- Starting exercise ${exercise}`);

    for(let rep = 1; rep <= 5; rep++) {
        console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
    }
}

*/
/*

// The While loop:

// console.log("--- I'm the FOR loop");
// for(let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weight repetition ${rep} 🏋🏻‍♂️`);
// }

console.log("--- I'm the WHILE loop");
let rep = 1;
while (rep <= 10) {
     console.log(`Lifting weight repetition ${rep} 🏋🏻‍♂️`);
     rep++
}


let dice = Math.trunc(Math.random() * 6) + 1;

while(dice !== 6) {
    console.log(`You rolled ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if(dice === 6) console.log("You won!");
}

*/
