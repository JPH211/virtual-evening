// function arrayOfMultiples(multiplier, timesToIterate) {
//     let i = 0;
//     let outputArray = [];                       //create empty array
//     while (i <= timesToIterate) {
//         outputArray[i] = (multiplier * (i+1));  //assign the value to next element in array
//         i++                                     //ITERATE! (maybe use a for ... of loop next time?)
//     }                                           // the math seems clunky but this way we dont get an empty element, or a 0 in the output array.
//     outputArray.pop();                          //remove unneccesary element at outputArray.length
//     return outputArray;
// }

// console.log(arrayOfMultiples(7,5));
// console.log(arrayOfMultiples(12,10));
// console.log(arrayOfMultiples(17,6));
// console.log(arrayOfMultiples(1,10).length)   

// //sanity check that ln 8 works as intended.

// let x = arrayOfMultiples(7,5);
// let headingOne = document.querySelector('h1');



// headingOne.innerText = x;
