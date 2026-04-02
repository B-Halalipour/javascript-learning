'use strict';

// Coding Challenge 1:

/*
Given an array of forcasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17,21,23] will print "... 17 C in 1 days ... 21 C in 2 days ... 23 C in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

// My solution:
// const td1 = [17, 21, 23];
// const td2 = [12, 5, -5, 0, 4];
// const printForecast = function (tempArr) {
//   let finalMessage = '';
//   for (let i = 0; i < tempArr.length; i++) {
//     const message = `... ${tempArr[i]} C in ${tempArr.indexOf(tempArr[i]) + 1} days`;
//     finalMessage += message;
//   }

//   return finalMessage + ' ... ';
// };

// console.log(printForecast(td1));
// console.log(printForecast(td2));

// Jonas's solution:

// 1) Understanding the problem
// - Array transformed to string seperated by ...
// - What is the X days? Answer: index + 1

// 2) Breaking up into sub-problems
// - Transforming array into string
// - transform each element to string with C
// - string needs to contain day
// - add ... between elements and start and end of the string
// - log string to console

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let str = '... ';
  for (let i = 0; i < arr.length; i++) {
    str = str + `${arr[i]}℃ in ${i + 1} days ... `;
  }
  console.log(str);
};

printForecast(data1);
