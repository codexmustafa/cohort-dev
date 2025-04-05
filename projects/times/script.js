function realClock () {

const timeElement = document.getElementById('time');
const dateElement = document.getElementById('date');

const now = new Date();
// console.log(now)
const hours = now.getHours() % 12 || 12;
const minutes = now.getMinutes().toString().padStart(2, '0');
const seconds = now.getSeconds().toString().padStart(2, '0');

const meridian = now.getHours() <= 12 ? 'AM' : 'PM';

timeElement.textContent = `${hours}:${minutes}:${seconds} ${meridian}`;
dateElement.textContent = `${now}`

// console.log(hours)

}


setInterval((realClock),1000);
realClock();

// window.onload(realClock);

tolocaleDate
tolocaleString
tolocaleTimeString