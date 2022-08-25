// import { type } from "jquery";

const objABC = {
    a: 1,
    b: 2,
    c: 3
}

const objCompanies = {
    a: "Apple",
    b: "Microsoft",
    c: "Google"
}

const objTypes = {
    key1: true,
    key2: false,
    key3: undefined
}

// GET THE VALUES FROM THE KEY PAIRS \\
function getValues(inputArr) {
    let outputArrayValues = [];

    for (let value in inputArr) {
        outputArrayValues.push(inputArr[value])
    }
    return outputArrayValues;
}
console.group('Strings key from array');
console.log(getValues(objABC));
console.log(getValues(objCompanies));
console.log(getValues(objTypes));
console.groupEnd();

// GET THE KEYS FROM THE KEY PAIRS \\
function getKeys(inputArr){
    let outputArrayKeys = [];
    for (let keys in inputArr) {
        outputArrayKeys.push(keys)
    }
    outputArrayKeys.sort();
    return outputArrayKeys;
}
console.group("String values from array")
console.log(getKeys(objABC));
console.log(getKeys(objCompanies));
console.log(getKeys(objTypes));
console.groupEnd();

// ADD THE TWO SPLIT ARRAYS INTO AN ARRAY OF ARRAYS! \\
function keysAndValues(arr){
    const resultingArray = [];
    resultingArray.push(getKeys(arr))
    resultingArray.push(getValues(arr))
    console.log(resultingArray);
}

console.group("Joined Arrays");

keysAndValues(objCompanies);
keysAndValues(objTypes);
keysAndValues(objABC);

console.groupEnd();

