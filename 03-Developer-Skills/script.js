// Remember, we're gonna use strict mode in all scripts now!
'use strict';
/*

const x = 23;

const calcAge = birthYear => 2037 - birthYear;
console.log(calcAge(1996));


//PRBOLEM 1:
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

// My solution:
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


// PROBLEM 2:
// Function should now receive 2 arrays of tempratures

// 1) Understanding the problem
// - With two arrays, should we iplement functionality twice? No! just merge two arrays

// 2) Breaking up into sub-problems
// - merge 2 arrays
const arr1 = [1, 2, 3, 4, 5, 6];
const arr2 = [3, 5, 1, -2, -6, 6, -12];

const calculateAmplitudeNew = function (t1, t2) {
  const merged = t1.concat(t2);
  let max = -Infinity;
  let min = Infinity;
  for (let i = 0; i < merged.length; i++) {
    if (typeof merged[i] !== 'number') continue;
    if (merged[i] > max) max = merged[i];
    if (merged[i] < min) min = merged[i];
  }
  const amplitudeNew = max - min;
  //   console.log(max);
  //   console.log(min);
  return { min, max, amplitudeNew };
};
const { min, max, amplitudeNew } = calculateAmplitudeNew(arr1, arr2);
console.log(
  `the min value of the array is: ${min}, the max value of the array is: ${max} and the amplitude is: ${amplitudeNew}`,
);
*/
const measureKevin = function () {
  const measuremenet = {
    type: 'temp',
    unit: 'celsius',
    // C) FIX
    // value: Number(prompt('Degrees celsius')),
    value: 10,
  };

  // B) FIND
  console.log(measuremenet);
  console.table(measuremenet);
  //   console.log(measuremenet.value);
  //   console.warn(measuremenet.value);
  //   console.error(measuremenet.value);
  const kelvin = measuremenet.value + 273;
  return kelvin;
};
// A) IDENIFY
console.log(measureKevin());

// Using a debugger

const calculateAmplitudeBug = function (t1, t2) {
  const merged = t1.concat(t2);
  let max = 0;
  let min = 0;
  for (let i = 0; i < merged.length; i++) {
    if (typeof merged[i] !== 'number') continue;
    if (merged[i] > max) max = merged[i];
    if (merged[i] < min) min = merged[i];
  }
  const amplitudeBug = max - min;
  //   console.log(max);
  //   console.log(min);
  return { min, max, amplitudeBug };
};
const { min, max, amplitudeBug } = calculateAmplitudeBug([3, 5, 1], [9, 4, 5]);
// A) IDENTIFY
console.log(
  `  min: ${min}
  max: ${max}
  amploitude: ${amplitudeBug}`,
);
