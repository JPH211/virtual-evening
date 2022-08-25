// Aim: Create an application that, on button click, runs a function that prints out a users name, age, and occupation

//  Create the HTML with a button
//  Create a function that takes in a user object
//  Print each item in the user object out in a string to the console

const user1 = {
    name: 'Johnny',
    age: 23,
    location: "Cape!"
}

function printAllUser(user = {}) { //sets default user obj to empty object
    for (let item in user){ 
        console.log(user[item])
    }
}
function printUser(user = {}) { //sets default user obj to empty object
    for (let item in user){ 
        console.log(item)
    }
}