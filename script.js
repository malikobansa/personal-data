const weekday =
["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const d = new Date();
let day = weekday[d.getDay()];

document.getElementById('day').innerHTML= `Current Day :  ${day}`;

console.log(day)


var today = new Date();
const hours = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
const time = document.getElementById('time').innerHTML =`Current Time: ${hours}`;

console.log(hours)