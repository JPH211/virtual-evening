/**Aim: Create a function that takes three collections of arguments and returns the sum of the product of the grouped numbers. */

function product(array) {
    let a = array[0],
        b = array[1],
        c = array[2],
        productArrayOne = a[0] * a[1],
        productArrayTwo = b[0] * b[1],
        productArrayThree = c[0] * c[1],
        output = productArrayOne + productArrayTwo + productArrayThree;
    console.log(output);
}
product([[1,2],[1,1],[2,3]])
// 1 * 2 + 1 * 1 + 2 * 3

product([[10,2],[5,0],[2,3]])
// 10 * 2 + 5 * 0 + 2 * 3

product([[1,2],[2,3],[3,4]])
// 1 * 2 + 2 * 3 + 3 * 4

product([[1,2],[0,3],[3,0]]) 
