//Crazy button
//get dom elements
const crazyButton = document.querySelector(".crazy-button");
console.log(crazyButton);

//create function to move btn
function goCrazy(){
    // VVVV this just makes it a little more fun VVV
        // const catchMeIfYouCan = Math.floor(Math.random() * 100);
        // if(catchMeIfYouCan >= 50){
        //     crazyButton.innerText = "Catch Me If You Can!";
        // } else{
        //     crazyButton.innerText = "Try to Click Me!";
        // }
    const offsetTop =(Math.random() * (window.innerHeight - crazyButton.clientHeight));
    const offsetLeft = (Math.random() * (window.innerWidth - crazyButton.clientWidth));
    crazyButton.style.top = offsetTop + "px";
    crazyButton.style.left = offsetLeft + "px";
    // console.log(offsetLeft, offsetTop);

}
//add eventlistener for mouseenter

crazyButton.addEventListener('mouseenter', goCrazy);
