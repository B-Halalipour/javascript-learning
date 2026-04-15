'use strict';
/*
function calcAge(birthYear) {
  const age = 2037 - birthYear;
  function printAge() {
    let output = `${firstName}, You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenail = true;
      // creating new variable with same name as outer scope's variable
      const firstName = 'Steven';

      // reassigning outer scopes variable
      output = 'NEW OUTPUT!';

      const str = `Oh, you are a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str);
    console.log(millenail);
    // functions are also block scoped
    //add(2, 3);
    console.log(output);
  }
  printAge();
  return age;
}

const firstName = 'Jonas';
calcAge(1991);
*/

// Hoisting and TDZ
/*
// Variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Jonas';
let job = 'teacher';
const year = 1991;

// Functions
console.log(addDecl(2, 3));
console.log(addExpr);
console.log(addExpr(2, 3));
console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}
// any variable declared with var will be hoisted and set to undefined

var addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;
*/

// Example

/*
console.log(numProducts);
if (!numProducts) deleteShoppingCard();

var numProducts = 10;

function deleteShoppingCard() {
  console.log('all products deleted');
}
*/

// Use const most of the time to declare varables and let if you want to change the variable later
// you should declare the varibales at top of your code
// declare your functions first and use them only after decleration
