const items = document.querySelectorAll('.deadline-format h4');

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

// months are ZERO index based;
const futureDate = new Date(tempYear, tempMonth, tempDay+1, 12, 00, 00);
// console.log(futureDate)
const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
let month = futureDate.getMonth();
const date = futureDate.getDate();

const futureTime = futureDate.getTime();
function getRemaindingTime() {
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
  console.log(milisecond)

  // setting values array

  const values = [ hours, minutes, seconds, milisecond];
  //If time is less than 10 then add 0 before it
  function format(item) {
    return item;
  }
//For each selects each item  to attach on the count down timer
  items.forEach(function (item, i) {
    item.innerHTML = format(values[i]);
  });
}
let countdown = setInterval(getRemaindingTime, 10);
getRemaindingTime();