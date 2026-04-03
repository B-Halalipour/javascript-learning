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
