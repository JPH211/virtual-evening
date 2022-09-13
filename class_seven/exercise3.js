let drinks = [
    { name: "lemonade", price: 50 },
    { name: "lime", price: 10 },
    { name: "brewski", price: 1 },
    { name: "tea", price: 12}
];

//Create a function with the drinks array as an 
//argument and return the drinks objects sorted 
//by price in ascending order.

function sortDrinksByPrice(list)  {
    return (list.sort((a, b) => a.price - b.price));
}
console.groupCollapsed("Ex 3")
console.log(sortDrinksByPrice(drinks))
// const drinksByPrice = sortDrinksByPrice(drinks);
// console.log(drinksByPrice)
console.groupEnd();