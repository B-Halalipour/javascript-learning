//challenge 1:
/*
const markWeightTD1 = 78
const markHeightTD1 = 1.69
const johnWeightTD1 = 92
const johnHeightTD1 = 1.95
const markBMITD1 = markWeightTD1 / (markHeightTD1 ** 2)
const johnBMITD1 = johnWeightTD1 / (johnHeightTD1 ** 2)

const markWeightTD2 = 95
const markHeightTD2 = 1.88
const johnWeightTD2 = 85
const johnHeightTD2 = 1.76
const markBMITD2 = markWeightTD2 / (markHeightTD2 ** 2)
const johnBMITD2 = johnWeightTD2 / (johnHeightTD2 ** 2)

const markHigherBMITD1 = markBMITD1 > johnBMITD1
const markHigherBMITD2 = markBMITD2 > johnBMITD2

console.log(`Marks BMI in TD1: ${markBMITD1}, Johns BMI in TD1: ${johnBMITD1}. Mark has higher BMI in TD1: ${markHigherBMITD1}`)

console.log(`Marks BMI in TD2: ${markBMITD2}, Johns BMI in TD1: ${johnBMITD2}. Mark has higher BMI in TD1: ${markHigherBMITD2}`)
*/

//challenge 2:

/*

const markWeightTD1 = 78
const markHeightTD1 = 1.69
const johnWeightTD1 = 92
const johnHeightTD1 = 1.95
const markBMITD1 = markWeightTD1 / (markHeightTD1 ** 2)
const johnBMITD1 = johnWeightTD1 / (johnHeightTD1 ** 2)

const markWeightTD2 = 95
const markHeightTD2 = 1.88
const johnWeightTD2 = 85
const johnHeightTD2 = 1.76
const markBMITD2 = markWeightTD2 / (markHeightTD2 ** 2)
const johnBMITD2 = johnWeightTD2 / (johnHeightTD2 ** 2)

const markHigherBMITD1 = markBMITD1 > johnBMITD1
const markHigherBMITD2 = markBMITD2 > johnBMITD2

if (markBMITD1 > johnBMITD1) {
    console.log(`In test Data 1, Marks's BMI (${markBMITD1}) is higher than john's (${johnBMITD1})!`)
} else if (markBMITD1 === johnBMITD1) {
    console.log(`In test Data 1, Marks's BMI (${markBMITD1}) is equal to john's (${johnBMITD1})!`)
} else {
    console.log(`In test Data 1, John's's BMI (${johnBMITD1}) is higher than Markss (${markBMITD1})!`)
}


if (markBMITD2 > johnBMITD2) {
    console.log(`In test Data 2 Marks's BMI (${markBMITD2}) is higher than john's (${johnBMITD2})!`)
} else if (markBMITD2 === johnBMITD2) {
    console.log(`In test Data 2, Marks's BMI (${markBMITD2}) is equal to john's (${johnBMITD2})!`)
} else {
    console.log(`In test Data 2, John's's BMI (${johnBMITD2}) is higher than Markss (${markBMITD2})!`)
}

*/

// challenge 3:

const scoreDolphins = (96 + 108 + 89) / 3
const scoreKoalas = (88 + 91 + 110) / 3

if (scoreDolphins > scoreKoalas) {
    console.log("Dolphins win the trophy")
} else if (scoreDolphins < scoreKoalas) {
    console.log("Koalas win the trophy")
} else {
    console.log("Both win the trophy")
}
