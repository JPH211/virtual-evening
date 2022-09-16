var myExpenses = [
    {
        name: "Dogfood",
        price: 8
    }, {
        name: "Ramen",
        price: 0.49
    }, {
        name: "Cereal",
        price: 2.49
    }, {
        name: "Concert Tickets",
        price: 300
    }
];
// console.log("list created in memory");
var elementsAdded = 0; //initialize interator
while (elementsAdded < myExpenses.length) { //only loop over length of myExpenses array
    var myTempText = document.createElement("li"); //create a "node" using the html <li> tag
    var textnode = document.createTextNode(myExpenses[elementsAdded].name); //create textfor the <li> tag from expenses[].name
    myTempText.appendChild(textnode); //add the text as <li> node after retrieving the  text
    var newLocal = document.getElementById("myList");
    newLocal.appendChild(myTempText); //add the <li> element to the <ul id="myList">
    elementsAdded++; //don't forget to iterate!!
}
// document.getElementById("myList").appendChild(node);
