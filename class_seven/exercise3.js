let drinks = [
    { name: "lemonade", price: 50 },
    { name: "lime", price: 10 },
];

//Create a function with the drinks array as an 
//argument and return the drinks objects sorted 
//by price in ascending order.

function sortDrinksByPrice(list){
    list.sort((a,b) => a.price - b.price);
    return list;
}

const drinksByPrice = sortDrinksByPrice(drinks);
console.log(drinks.sort())