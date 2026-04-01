/*
const users = ["Maya", "Devin", "Abbie"];

//Task1: Adding a user if not existed:

const addUser = function(usersArr, user) {
    if(usersArr.includes(user)) {
        console.log("user already exists");
        
    } else {
        usersArr.push(user)
        console.log("User added");
    }

    
}

//Task2: Remove user if existed

const removeUser = function (usersArr, user) {
    for(let i = 0; i < usersArr.length; i++) {
        if(user === usersArr[i]) {
            const removedUser = usersArr.splice(i, 1)
            return removedUser[0]
        }
    }
    console.log("user not found");

    
}


// Task3: Find User if existed:

const findUser = function(usersArr, user) {
   return usersArr.includes(user) ? "User found" : "User not found"
}

//Task4: List Users:

const listUsers = function(usersArr) {
    for(let i = 0; i < usersArr.length; i++) {
        console.log(usersArr[i]);
    }
}

// Task5: controller function:

const handleUser = function (action, name) {
    const functions = {
        add: addUser,
        remove: removeUser,
        find: findUser,
        list: listUsers
    }

     if (!functions[action]) {
        return "Invalid action";
    }

    return functions[action](users, name)
}
console.log(users);

// addUser(users, "Maya")
// addUser(users, "Maryam")
// console.log(users);
// removeUser(users, "Maya")
// console.log(users);
// removeUser(users, "Abbie")
// console.log(users);
// console.log(findUser(users, "Behnoud"));
// console.log(findUser(users, "Devin"));
// listUsers(users)

handleUser("add", "Behnoud")
handleUser("remove", "Behnoud")
console.log(users);

*/