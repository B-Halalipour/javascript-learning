'use strict';

// Coding Challenge 1:

/*
Given an array of forcasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17,21,23] will print "... 17 C in 1 days ... 21 C in 2 days ... 23 C in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]


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
*/

// Challenge 2:
/*
 Let's say that you're building a time tracking application for freelancers. At some point in building this app, you need a function that receives daiky work hours for certain week, and returns:

1. Total hours worked
2. Average daily hours
3. The day with most hours worked
4. Number of days worked
5. Wheter the week was full-time (worked 35 hours or more)

TEST DATA : [7.5, 8, 6.5, 0, 8,5, 4, 0]
 */

const hours = [7.5, 8, 6.5, 0, 8.5, 4, 0];

const timeTracker = function (hoursArr) {
  let max = -Infinity;
  let totalHours = 0;
  let count = 0;
  for (let i = 0; i < hoursArr.length; i++) {
    const currentHour = hoursArr[i];
    totalHours += currentHour;
    if (currentHour > max) max = currentHour;
    if (currentHour > 0) count += 1;
  }
  const fullTime = totalHours >= 35;
  const avg = totalHours / hoursArr.length;
  const day = hoursArr.indexOf(max) + 1;
  return { totalHours, avg, day, count, fullTime };
};

const { totalHours, avg, day, count, fullTime } = timeTracker(hours);
console.log(
  `Total hours worked: ${totalHours}, Average daily hours: ${avg}, The day with most hours worked ${day}, Number of days worked ${count}, Wheter the week was full-time (worked 35 hours or more): ${fullTime}`,
);
