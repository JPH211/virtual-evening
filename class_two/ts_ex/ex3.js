function arrayOfMultiples(multiplier, timesToIterate) {
    var i = 0;
    var outputArray = []; //create empty array
    while (i <= timesToIterate) {
        var x = void 0;
        x = multiplier * (i + 1);
        outputArray[i] = x;
        i++;
        //assign the value to next element in array
    }
    outputArray.pop();
    return outputArray;
}
console.log(arrayOfMultiples(7, 5));
console.log(arrayOfMultiples(12, 10));
console.log(arrayOfMultiples(17, 6));
console.log(arrayOfMultiples(1, 10).length);
{
    var x = void 0;
    x = arrayOfMultiples(7, 5);
    var headingOne = void 0;
    headingOne = document.querySelector('h1');
    headingOne.innerHTML = "".concat(x);
}
