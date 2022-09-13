/*Create the function that takes an array with objects 
and returns the sum of people's budgets. */


function getBudgets(arr){
    let sum = 0;
    arr.forEach(element => {
        sum+=element.budget;
    });
    return (`The total budget is: $${sum.toFixed(2)}`);
}

let array1 = [
    { name: "John", age: 21, budget: 23000 },
    { name: "Steve", age: 32, budget: 40000 },
    { name: "Martin", age: 16, budget: 2700 }
];

console.groupCollapsed("Ex 4")
console.log(getBudgets(array1))

console.log(getBudgets([
    { name: "John", age: 21, budget: 29000 },
    { name: "Steve", age: 32, budget: 32000 },
    { name: "Martin", age: 16, budget: 1600 }
]))

console.log(getBudgets([
    { name: "John", age: 21, budget: 29002.30 },
    { name: "Steve", age: 32, budget: 32023.40 },
    { name: "Martin", age: 16, budget: 16000.00 }
]))
console.groupEnd();