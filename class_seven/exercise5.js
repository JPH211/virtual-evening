/*
Write a function that converts an object into an array, 
where each element represents a key-value pair in the form of an array.
*/

function toArray(obj) {
    const outputArr = [];
    
    for (const key in obj) {
        let tempArr = [];
        tempArr.push(key, obj[key])
        outputArr.push(tempArr)
    }  
    return outputArr; 
}
console.log(toArray({ a: 1, b: 2 }));
console.log(toArray({ shrimp: 15, tots: 12 }))
console.log(toArray({}))
