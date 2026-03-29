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

// challenge 3:

/*
const mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,
    calcBMI : function() {
    this.bmi = this.mass / (this.height * this.height)
    return this.bmi  
    }
}

const john = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,
    calcBMI : function() {
     this.bmi = this.mass / (this.height * this.height)
     return this.bmi  
    }
}
mark.calcBMI()
john.calcBMI()
console.log(mark.bmi < john.bmi ? `John Smith's BMI (${john.bmi}) is higher than Mark Miller's (${mark.bmi})!` : `Mark Miller's BMI (${mark.bmi}) is higher than John Smith's (${john.bmi})!` 

)
*/


