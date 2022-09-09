const itemsOfTimer = document.querySelectorAll('.flash-sale-end-format h4');

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

const futureDate = new Date(tempYear, tempMonth, tempDay+1, 12, 00, 00);
const date = futureDate.getDate();
const futureTime = futureDate.getTime();
function getRemainingTime() {
  const today = new Date().getTime();
  const t = futureTime - today;

  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  let days = t / oneDay;
  days = Math.floor(days);
  let hours = Math.floor((t % oneDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);
  let milisecond = Math.floor((t%100)/10)

  // putting values in the array to pass inside the timer

  const timerValue = [ hours+"hr", minutes+"mins", seconds+" s", milisecond];
  function format(item) {
    return item;
  }
//For each selects each item  to attach on the count down timer
  itemsOfTimer.forEach(function (item, i) {
    item.innerHTML = format(timerValue[i]);
  });
}
let countdown = setInterval(getRemainingTime, 70);
getRemainingTime();