//challenge 1:
/*
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= avgKoalas * 2) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= avgDolphins * 2) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log("No team wins...");
    }
};

checkWinner(scoreDolphins, scoreKoalas);

*/

// challenge 2:
/*

const calcTip = function (bill) {
    let tip;
    if(bill >= 50 && bill <= 300) {
        tip = bill * 0.15
    } else {
        tip = bill * 0.2
    }

    return tip;
}

const bills = [125, 555, 44]
const tips = []
const totals = []

tips.push(calcTip(bills[0]))
tips.push(calcTip(bills[1]))
tips.push(calcTip(bills[2]))

totals.push(bills[0] + tips[0])
totals.push(bills[1] + tips[1])
totals.push(bills[2] + tips[2])

console.log(bills, tips, totals);

*/

// Objects:
/*
const behnoud = {
    firstName: "Behnoud",
    lastName: "Halalipour",
    age: 2026 - 1996,
    job: "barista",
    friends: ["Maya", "Devin", "Ashkan"]
}
console.log(behnoud);
console.log(behnoud.lastName);
console.log(behnoud["lastName"]);

const nameKey = "Name"
console.log(behnoud["first" + nameKey]);
console.log(behnoud["last" + nameKey]);

const interestedIn = prompt("What do you want to know about behnoud? choose between firstName, lastName, age, job and friends" )

console.log(interestedIn);

if(behnoud[interestedIn]) {
    console.log(behnoud[interestedIn]);
} else {
    console.log("Wrong request! choose between firstName, lastName, age, job and friends");
}

behnoud.location = "Scotland";
behnoud.instagram = "@behnoudhalalipour"
console.log(behnoud);

// challenge:
//behnoud has 3 friends and his best friend is maya

const firstName = behnoud.firstName;
const numberOfFriends = behnoud.friends.length;
const bestFriend = behnoud.friends[0]

console.log(`${firstName} has ${numberOfFriends} friends and his best friend is ${bestFriend}`);

*/

const behnoud = {
    firstName: "Behnoud",
    lastName: "Halalipour",
    birthYear: 1996,
    job: "barista",
    friends: ["Maya", "Devin", "Ashkan"],
    hasDrivingLicense: false,

    // calcAge: function(birthYear) {
    //     return 2026 - birthYear
    // }


    // calcAge: function() {
    //     // console.log(this);
    //     return 2026 - this.birthYear
    // }

    calcAge: function() {
        // console.log(this);
        this.age = 2026 - this.birthYear
        return this.age
    },
    // my solution for the challenge:

    /*
    getSummery: function() {
        return this.hasDrivingLicense ?`${this.firstName} is a ${this.age} year old ${this.job}, and he has a driving license` : `${this.firstName} is a ${this.age} year old ${this.job}, and he doesn't have a driving license`
    } 

    */

    // jonas solution:

    getSummery: function() {
        return `${this.firstName} is a ${this.calcAge()} year old ${this.job}, and he has ${this.hasDrivingLicense ? 'a' : "no"} driving license`
    }

    
}

// console.log(behnoud.calcAge(behnoud.birthYear));
console.log(behnoud.calcAge());
console.log(behnoud.getSummery());

console.log(behnoud.age);
console.log(behnoud.age);
console.log(behnoud.age);

// challenge:
// jonas is a 46 year old teacher. and he has a/no drivers license