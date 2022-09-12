/*
Aim: Write a function redundantReturn that takes in a string a parameter
 named str. This function should return another function that returns a 
  using the str variable. Print that message to the developer console.
*/

function redundantReturn(str){
    let str1 = str;
    function returnFunc(){
        return str1;
    }
    return returnFunc()
}

console.log(redundantReturn('a'))
