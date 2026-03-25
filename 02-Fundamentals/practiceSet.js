// Level 1:

// 1. Age checker:
const checkAge = function (age) {
    return age >= 18 ? "You are an adult" : "You are a minor"
}

console.log(checkAge(30))

// 2. Even or Odd:
const isEven = function (num) {
    return num % 2 === 0 ? "Even" : "Odd"
}

console.log(isEven(23))

// 3. Grade Calculator:

const gradeCalc = function (score) {
    if (score >= 90 && score <= 100) {
        return "A"
    } else if (score >= 80 && score <= 89) {
        return "B"
    } else if (score >= 70 && score <= 79) {
        return "C"
    } else if (score >= 60 && score <= 69) {
        return "D"
    } else if (score >= 0 && score < 60) {
        return "F"
    } else {
        return "inputed number is not correct"
    }
}
console.log(gradeCalc(98))
console.log(gradeCalc(112))

// Level 2:

// Tip Calculator:

const tipCalc = function (bill) {
    let tip;
    if (bill >= 50 && tip <= 300) {
        tip = bill * 0.15
    } else {
        tip = (bill * 0.2)
    }

    return bill + tip
}

console.log(tipCalc(300))