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