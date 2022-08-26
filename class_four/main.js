//create a function that returns the number of true values in an array
function countTrue(myArray) {
    let count = 0;
    let i = 0;
    // console.log(myArray[i])
    for (i = 0; i < myArray.length; i++) {
        if (myArray[i] === true) {
            count++;
        }
    }
    return count;
}
//testing section
const testArr = [true, false, true, true];

console.log(countTrue([]));