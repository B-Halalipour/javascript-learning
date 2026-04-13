'use strict';

function calcAge(birthYear) {
  const age = 2037 - birthYear;
  function printAge() {
    const output = `${firstName}, You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenail = true;
      const str = `Oh, you are a millenial, ${firstName}`;
      console.log(str);
    }
    // console.log(str);
    console.log(millenail);
  }
  printAge();
  return age;
}

const firstName = 'Jonas';
calcAge(1991);
