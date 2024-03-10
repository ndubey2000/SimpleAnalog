let hr =document.getElementById('hour');
let min =document.getElementById('min');
let second =document.getElementById('second');

function displayTime()
{
  let date=new Date();

  let hh=date.getHours();
  let mm=date.getMinutes();
  let ss=date.getSeconds();

  let hRotation = 30*hh + mm/2;
  let mRotation = 6*mm;
  let secondDegrees = 6*ss;

  hr.style.transform = `rotate(${hRotation}deg)`;
  min.style.transform = `rotate(${mRotation}deg)`;
  second.style.transform = `rotate(${secondDegrees}deg)`;

  
}
 setInterval(displayTime, 1000);

 /*function setClock() {
  const now = new Date();
  const hour = now.getHours();
  const minute = now.getMinutes();
  const second = now.getSeconds();

  const hourHand = document.querySelector('.hour-hand');
  const minuteHand = document.querySelector('.minute-hand');
  const secondHand = document.querySelector('.second-hand');

  const hourDegrees = (hour * 30) + (0.5 * minute);
  const minuteDegrees = (minute * 6) + (0.1 * second);
  const secondDegrees = second * 6;

  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
  secondHand.style.transform = `rotate(${secondDegrees}deg)`;
}

setInterval(setClock, 1000);*/