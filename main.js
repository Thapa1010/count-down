const allDates = document.querySelectorAll(".textcontent");
const deadline = document.querySelector(".time__container");

const countDown = function () {
  //future date
  const futureDate = new Date(2022, 9, 25, 0, 0, 0);
  const futureTime = futureDate.getTime();

  //get future dates
  const fYear = futureDate.getFullYear();
  const fmonth = futureDate.getMonth();
  const fday = futureDate.getDate();
  const fhour = futureDate.getHours();
  const fminute = futureDate.getMinutes();
  const fsec = futureDate.getSeconds();

  //current date
  const currentDate = new Date();
  const currentTime = currentDate.getTime();

  //time interval
  const totalMilSec = futureDate - currentDate;

  ///////
  // 1s = 1000ms
  //1m = 60s
  //1hr = 60m
  //1day= 24hr

  const oneday = 24 * 60 * 60 * 1000;
  const onehour = 60 * 60 * 1000;
  const onemin = 60 * 1000;

  //calculate total dates
  let days = Math.floor(totalMilSec / oneday);
  let hours = Math.floor((totalMilSec % oneday) / onehour);
  let min = Math.floor((totalMilSec % onehour) / onemin);
  let sec = Math.floor((totalMilSec % onemin) / 1000);

  const values = [days, hours, min, sec];

  const format = function (date) {
    if (date < 10) {
      return (date = `0${date}`);
    }
    return date;
  };

  allDates.forEach(function (date, i) {
    date.textContent = format(values[i]);
  });
  if (totalMilSec < 0) {
    clearInterval(countDown);
    deadline.innerHTML = `<h3 class="expired">Sorry, Time Expired!!</h3>`;
  }
};

///interval
const timeTnterval = setInterval(countDown, 1000);
countDown();
