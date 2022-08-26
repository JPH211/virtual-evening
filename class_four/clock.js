//clock
let hours = document.querySelector('#hrs');
let minutes = document.querySelector('#mins');
let seconds = document.querySelector('#secs');
let timerStarted = true;
var timer = self.setInterval(updateClock, 1); //will autostart
//no need to call a function, since the timer declaration call the 
// updateClock() function, that created the Date Object.
var isPm = false;

function updateDate() {
    const date = new Date();
    return date;
}

function updateClock() {
    const date = updateDate();
    let amPm = document.getElementById('amPm');
    hours.innerText = formatNumbers(twelveHrTime(date.getHours()));
    if (isPm) {
        amPm.innerText = '  Pm';
    }
    minutes.innerText = formatNumbers(date.getMinutes());
    seconds.innerText = formatNumbers(date.getSeconds());
}

function formatNumbers(n) {
    return ((n > 9) ? ('' + n) : ("0" + n));
}

function twelveHrTime(n) {
    (n > 12 ? isPm = true : n);
    return (n > 12 ? n - 12 : n);
}


