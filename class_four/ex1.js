const body = document.body;
const button = document.querySelector('button');

function changeBackgroundToRandomColor(){
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    const newColor = `#${randomColor}`;
    body.style.backgroundColor = newColor;
    button.style.color = newColor;
    return true;
}

button.addEventListener('mouseenter', changeBackgroundToRandomColor);
button.addEventListener('click', changeBackgroundToRandomColor);

