/*


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
    if (bill >= 50 && bill <= 300) {
        tip = bill * 0.15
    } else {
        tip = (bill * 0.2)
    }

    return bill + tip
}

console.log(tipCalc(300))

// Username Formatter:
const formatUsername = function (username) {
    return (username[0].toUpperCase() + username.slice(1).toLowerCase())
}
console.log(formatUsername("behNoud"))

// Truthy/Falsy Tester:

const checkValue = function (value) {
    return value ? "Truthy" : "Falsy"
}

console.log(checkValue(0))
console.log(checkValue(""))
console.log(checkValue("hello"))
console.log(checkValue(null))
console.log(checkValue(undefined))
console.log(checkValue([]))
console.log(checkValue({}))

// Level 3:

// Login System:

const login = function (username, password) {
    return username === "admin" && password === "1234" ? "Login successful" : "Invalid credentials"
}

console.log(login("admin", "1234"))
console.log(login("admin", "12345"))

// BMI Calculator:

const calcBMI = function (weight, height) {
    const BMI = weight / (height ** 2);
    if (BMI < 18.5) {
        console.log("Underweight")
    } else if (BMI >= 18.5 && BMI <= 24.9) {
        console.log("Normal")
    } else if (BMI >= 25 && BMI <= 29.9) {
        console.log("Overweight")
    } else {
        console.log("Obese")
    }
}

calcBMI(110, 1.78);

// Team Wiiner: 
const calcAvg = function (a, b, c) {
    return (a + b + c) / 3;
}
const avg1 = calcAvg(10, 15, 20)
const avg2 = calcAvg(30, 50, 90)
const checkWinner = function (avg1, avg2) {
    if (avg1 >= 2 * avg2) {
        console.log("Team 1 won!")
    } else if (avg2 >= 2 * avg1) {
        console.log("Team 2 won")
    } else { console.log("No one won") }
}

checkWinner(avg1, avg2)

// Level 4:

// Smart Calculator:

const calculate = function (num1, num2, operator) {
    const expr = operator;

    switch (expr) {
        case "+":
            console.log(num1 + num2)
            break;
        case "-":
            console.log(num1 - num2)
            break;
        case "*":
            console.log(num1 * num2)
            break;
        case "/":
            console.log(num1 / num2)
            break;
        default:
            console.log("sorry the calculator doesn't have that operator")
    }
}

calculate(2, 3, "+")


// Basicmanipulation

const nums = [10, 20, 30]
nums.unshift(5)
nums.push(40)
console.log(nums);
nums.pop()
nums.shift()
console.log(nums);

// Smart check:
const friends = [];
const checkFriend = function(friendsName) {
    if(friends.includes(friendsName)) {
        console.log("You already have this friend");
    } else {
        friends.push(friendsName)
        console.log("Adding friend...");
    }
}

checkFriend("Maya")
checkFriend("Maya")
checkFriend("Abbie")
checkFriend("Ann")
checkFriend("Devin")
checkFriend("Ewan")
console.log(friends);

// Remove by name:

const removeFriend = function(name) {
    if(!friends.includes(name)) {
        console.log(`${name} is not your friend`);
    } else {
        const friendsPosition = friends.indexOf(name)
        const deletedFriend = friends.splice(friendsPosition, 1)
        console.log(`${deletedFriend} is no longer your friend`);
    }
}
removeFriend("Behnoud")
removeFriend("Abbie")
console.log(friends);


// Print only numbers:

const values = [10, "hello", 23, true, 50, "world"];

const number = []
for (let i = 0; i < values.length; i++) {
    if(typeof values[i] !== "number") continue;
    number.push(values[i]);
}

console.log(number);



// Count Truthy values:
const values = [0, "hi", null, 42, "", [], undefined];
const truthy = [];
for (let i = 0; i < values.length; i++) {
    if(!values[i]) continue;
    truthy.push(values[i])
}
const count = truthy.length
console.log(truthy);
console.log(count)



// Find First Negative Number:

const nums = [5, 12, -3, 7, -1];
for(let i = 0; i < nums.length; i++) {
    if(nums[i] < 0) {
        console.log(nums[i]);
        break;
    };
}    


// const findNegative = function(arr) {
//     let negativeNumber;
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i] < 0) {
//          negativeNumber = arr[i];
//         }
//         break;
//     }
//     return negativeNumber;
// }

// findNegative(nums)
// console.log(negativeNumber);

// Remove a user from array:

const users = ["Maya", "Devin", "Abbie", "Ewan"];
// write a logiv to remove "Abbie"
const removeUser = function(usersArr, user) {
    const userIndex = usersArr.indexOf(user)
    const deletedUser = usersArr.splice(userIndex,1); 
    return deletedUser;
}

removeUser(users,"Abbie")
// console.log(deletedUser);
console.log(users);



// Print active users only:

const users = [
  { name: "Behnoud", active: true },
  { name: "Maya", active: false },
  { name: "Devin", active: true }
];
const activeUsers = []
for(let i = 0; i < users.length; i++) {
    if(users[i].active !== true) continue;

    activeUsers.push(users[i])
}
console.log(activeUsers);


// Calculate total score

const players = [
  { name: "A", score: 10 },
  { name: "B", score: 20 },
  { name: "C", score: 15 }
];
let totalScore = 0;
for(let i = 0; i < players.length; i++) {
    totalScore += players[i].score
}
console.log(totalScore);
*/

// Find highest score

const scores = [10, 50, 30, 80, 40];

let highestScore = scores[0];
for(let i = 0; i < scores.length; i++) {
    if(scores[i] > highestScore) highestScore = scores[i]
}
console.log(highestScore);
