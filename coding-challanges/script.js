// Challenge 1:
/*
const behnoud = {
  firstName: 'Behnoud',
  lastName: 'Halalipour',
  birthYear: 1996,
  job: 'Barista',
  hasDrivingLicense: true,
  calcAge: function () {
    this.age = 2026 - this.birthYear;
    return this.age;
  },
  getSummary: function () {
    this.calcAge();
    return this.hasDrivingLicense
      ? `${this.firstName} is a ${this.age} year old ${this.job}, and he has a driving license`
      : `${this.firstName} is a ${this.age} year old ${this.job}, and he doesn't have a driving license`;
  },
};

const summary = behnoud.getSummary();
console.log(summary);
console.log(behnoud.age);
*/

// Challenge 2:
/*
calcAvg = function () {
  let sum = 0;
  for (let i = 0; i < this.scores.length; i++) {
    sum += this.scores[i];
  }
  this.average = sum / this.scores.length;
  return this.average;
};
const behnoud = {
  fullName: 'Behnoud Halalipour',
  scores: [20, 40, 30],
  calcAvg,
};
const maryam = {
  fullName: 'Maryam Haqparast',
  scores: [20, 40, 60],
  calcAvg,
};
const behnoudAvgScores = behnoud.calcAvg();
const maryamAvgScores = maryam.calcAvg();

if (behnoudAvgScores > maryamAvgScores) {
  console.log(`Behnoud wins (${behnoudAvgScores} vs ${maryamAvgScores})`);
} else if (maryamAvgScores > behnoudAvgScores) {
  console.log(`Maryam wins (${maryamAvgScores} vs ${behnoudAvgScores})`);
} else {
  console.log(`Both have the same score ${behnoudAvgScores}`);
}

console.log(behnoud.average, maryam.average);
*/

// Challenge 3:

/*
const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
const calcAmplitude = function (temps) {
  let max = -Infinity;
  let min = Infinity;
  for (let i = 0; i < temps.length; i++) {
    if (typeof temps[i] !== 'number') continue;
    if (temps[i] > max) max = temps[i];
    if (temps[i] < min) min = temps[i];
  }
  const amplitude = max - min;

  return amplitude;
};

const amplitude = calcAmplitude(temperatures);
console.log(amplitude);
*/

// Challenge 4:

const temps1 = [3, 5, 1];
const temps2 = [9, 0, 5];

const calcAmplitude = function (t1, t2) {
  // merge both arrays:
  const temps = t1.concat(t2);
  // ignore errors
  // find max & min
  // return amplitude
  let max = -Infinity;
  let min = Infinity;
  for (let i = 0; i < temps.length; i++) {
    if (typeof temps[i] !== 'number') continue;
    if (temps[i] > max) max = temps[i];
    if (temps[i] < min) min = temps[i];
  }
  return max - min;
};

const amplitude = calcAmplitude(temps1, temps2);
console.log(amplitude);
