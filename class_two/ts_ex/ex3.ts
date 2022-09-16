function arrayOfMultiples(multiplier: number, timesToIterate: number): number[] {
    let i = 0;
    let outputArray: number[] = [];                      //create empty array
    while (i <= timesToIterate) {
        let x: number; 
        x = multiplier * (i+1);
        outputArray[i] = x;
        i++
          //assign the value to next element in array
    }                                       
    outputArray.pop();                      
    return outputArray;
}

console.log(arrayOfMultiples(7,5));
console.log(arrayOfMultiples(12,10));
console.log(arrayOfMultiples(17,6));
console.log(arrayOfMultiples(1,10).length);  

{
let x: number[];
x = arrayOfMultiples(7,5);
let headingOne: any;
headingOne = document.querySelector('h1');


headingOne.innerHTML = `${x}`;}