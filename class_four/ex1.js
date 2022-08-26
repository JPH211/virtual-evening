// change background of body and text color of a button
const bodyEl = document.body;
const button = document.querySelector('button');

function changeRandomColor(){
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    const newColor = `#${randomColor}`;
    bodyEl.style.backgroundColor = newColor;
    button.style.color = newColor;
    return true;
}

button.addEventListener('mouseenter', changeRandomColor);
button.addEventListener('click', changeRandomColor);

