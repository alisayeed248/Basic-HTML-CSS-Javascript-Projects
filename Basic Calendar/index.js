const daysEl = document.querySelector(".days");
const fullDateEl = document.querySelector(".date p");
const monthEl = document.querySelector(".date h1");

const monthIndex = new Date().getMonth();
const lastDay = new Date(new Date().getFullYear(), monthIndex + 1, 0).getDate();
const firstDay = new Date(new Date().getFullYear(), monthIndex , 1).getDay(); // need to fix this not working properly

console.log(lastDay);
console.log(firstDay); // 0: let's say the week starts on Sunday, then we get six empty divs

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

monthEl.innerText = months[monthIndex];
fullDateEl.innerText = new Date().toDateString(); // need to remember to include () during method calls, otherwise we get issues

let days = "";

for (let i = (firstDay + 6) % 7; i > 0; i--) { // we need sunday to have a value of 7, maybe modulo 
  days += `<div class="empty"></div>`;
}

for (let i = 1; i <= lastDay; i++) {
  if (i === new Date().getDate()) {
    days += `<div class="today">${i}</div>`;
  }
  else days += `<div>${i}</div>`;
}

daysEl.innerHTML = days;
