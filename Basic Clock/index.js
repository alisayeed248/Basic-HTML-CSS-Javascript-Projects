// targets the div .hour
const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");


// we can use setTimeOut or setInterval
function updateClock() {
  // gives us an object
  const currentDate = new Date(); // .getHours give us only the hours time
  setTimeout(updateClock, 10); // 1000 gives it to us every second
  console.log(currentDate);
  const hour = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();
  const milliseconds = currentDate.getMilliseconds();
  console.log(hour, minutes, seconds, milliseconds);
  
  // added functionality that allows for second hand to move fluidly, and then minute hand
  const hourDeg = (hour / 12) * 360;
  const minuteDeg = ((minutes + (((seconds * 1000) + milliseconds) / 60000)) / 60) * 360;
  const secondDeg = (((seconds * 1000) + milliseconds) / 60000) * 360; // milliseconds goes to 1000, then reverts, so max it goes to 1000/60000 --> at that time seconds = 0
  console.log((((seconds * 1000) + milliseconds) / 60000));
  console.log(minuteDeg); 

  // we are going to change the transform style element
  // since it's dynamic we use a backtick to add variable
  hourEl.style.transform = `rotate(${hourDeg}deg)`;
  minuteEl.style.transform = `rotate(${minuteDeg}deg)`;
  secondEl.style.transform = `rotate(${secondDeg}deg)`;
}

updateClock();
