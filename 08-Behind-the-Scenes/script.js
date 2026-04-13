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

      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str);
    console.log(millenail);
    // functions are also block scoped
    add(2, 3);
  }
  printAge();
  return age;
}

const firstName = 'Jonas';
calcAge(1991);
