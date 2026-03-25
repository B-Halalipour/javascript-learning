// 1. Age checker:
const checkAge = function (age) {
    return age >= 18 ? "You are an adult" : "You are a minor"
}

// 2. Even or Odd:
const isEven = function (num) {
    return num % 2 === 0 ? "Even" : "Odd"
}

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