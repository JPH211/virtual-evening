// define the default state
//let isBackgroundBlack = false;
// selects the body element
const bodyEl = document.querySelector("body");
// selects the first <h1> element
const headingOne = document.querySelector("#h1 *");
// select <h2> with class name heading-2
const headingTwo = document.querySelector(".heading-2");
bodyEl.style.backgroundColor='navy';
// changes "headingOne" variable's text content
//headingOne.innerText = "Updated from JavaScript";
// changes headingTwo variable's color
//headingTwo.style.color = "blue";

// changes the background color of bdy and text
function alertCall() {
    alert('alert successful');
    console.log('yup, what he said!');
    
}

function myFunction(){
    //I call alertCall() and run it a few times!
    let x=0;
    while(x<1){
        alertCall();
        x++;
    }
}

