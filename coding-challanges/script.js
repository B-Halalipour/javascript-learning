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

//Challenge 2:
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
