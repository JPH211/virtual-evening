function compact(arr: string) {
  if (arr.length > 10) return arr.slice(0, 10);
  return arr;
}

const myCompactedString = compact('Hello, I am John');
console.log(myCompactedString);


function myTrim(arr: string[][]) {
    if (arr.length > 3) return arr.slice(0,3);
    return arr;
}
function myTrim2(arr: string[]) {
    if (arr.length > 3) return arr.slice(0,3);
    return arr;
}

let arr1 = [['hi'], ['hello'], ['sup?'], ['i should be gone']]
const myTrimmedString = myTrim(arr1);

let arr2 = ['hi', 'hello', 'sup?', 'i should be gone']
const myTrimmedString2 = myTrim2(arr2);


console.log(myTrimmedString);
console.log(myTrimmedString2);