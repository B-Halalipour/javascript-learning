// Remember, we're gonna use strict mode in all scripts now!
'use strict';
/*

const x = 23;

const calcAge = birthYear => 2037 - birthYear;
console.log(calcAge(1996));
*/

//PRBOLEM:
// We work fro a company building a smart home thermometer. Our most recent task is this: "Given an array of temperaturas of one day, calculate the temperature aplitude. Keep in mind that sometimes there might be a sensor error."

const tempratures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How compute max and min tempratures?
// - What's a sensor error? And what to do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

const calculateAmplitude = function (temperaturesArr) {
  //   let max = temperaturesArr[0];
  //   let min = temperaturesArr[0];
  // The solution above can cause problem if the first argument is error

  let max = -Infinity;
  let min = Infinity;
  for (let i = 0; i < temperaturesArr.length; i++) {
    if (typeof temperaturesArr[i] !== 'number') continue;
    if (temperaturesArr[i] > max) max = temperaturesArr[i];
    if (temperaturesArr[i] < min) min = temperaturesArr[i];
  }
  const amplitude = max - min;
  //   console.log(max);
  //   console.log(min);
  return { min, max, amplitude };
};
const { min, max, amplitude } = calculateAmplitude(tempratures);
console.log(
  `the min value of the array is: ${min}, the max value of the array is: ${max} and the amplitude is: ${amplitude}`,
);
