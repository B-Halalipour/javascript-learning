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

const removeUser = function (usersArr, user) {
    for(let i = 0; i < usersArr.length; i++) {
        if(user === usersArr[i]) {
            const removedUser = usersArr.splice(i, 1)
            return removedUser[0]
        }
    }
    console.log("user not found");

    
}
console.log(users);

addUser(users, "Maya")
addUser(users, "Maryam")
console.log(users);
removeUser(users, "Maya")
console.log(users);
removeUser(users, "Abbie")
console.log(users);


