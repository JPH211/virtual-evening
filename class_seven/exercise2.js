function parent(x) {
    return function closure() {
        // Closure is declared here.
        return x;
    };
}

const rememberOne = parent("Remembers me! ");
// Seems like the variable x would be gone after
// parent is executed, but it's not.
const rememberTwo = parent(' I remembered!');

console.groupCollapsed("Ex 2")
console.log(rememberOne);                            
console.log(rememberTwo);                            
//                                                     ^^ means that remember needs to be called
//                                                     because it returns the function
console.log(`Remember One: ${rememberOne.call()}     
     and I was called`);      
//             ^ OR v  
console.log(`Remember Two: ${rememberTwo()}          
     and I was called`);           
// Return "remembers me"
console.groupEnd();
