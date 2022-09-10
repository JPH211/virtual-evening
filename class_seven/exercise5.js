/*
Write a function that converts an object into an array, 
where each element represents a key-value pair in the form of an array.
*/

function toArray(obj) {
    //input here is: { a: 1, b: 2 }
    let keys = Object.keys(obj)
    let values = Object.values(obj)   
    const tempArrKeys = [];
    const tempArrValues = [];   
    
    for (const key of keys) {
        tempArrKeys.push(key)
    }  console.log(tempArrKeys)
                            
    for (const value of values){
        tempArrValues.push(value)
    } console.log(tempArrValues)
                                
    const outputArrOfArrays = [[tempArrKeys.shift(), tempArrValues.shift()],[tempArrKeys.shift(), tempArrValues.shift()]];
    console.log(outputArrOfArrays);
    return outputArrOfArrays;
}
toArray({ a: 1, b: 2 })
//returns [["a", 1], ["b", 2]]