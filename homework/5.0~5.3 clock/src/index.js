const clockTitle = document.querySelector(".js-clock");

function getChristmas() {
  const date = new Date();
  const target = new Date("2022-12-25 00:00:00+0900");
  const gap = target - date;

  const day = String(Math.floor(gap / (1000 * 60 * 60 * 24))).padStart(2, "0");
  const hours = String(
    Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  ).padStart(2, "0");
  const minutes = String(
    Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60))
  ).padStart(2, "0");

  const seconds = String(Math.floor((gap % (1000 * 60)) / 1000)).padStart(
    2,
    "0"
  ); // 초

  clockTitle.innerText = `${day}d ${hours}h ${minutes}m ${seconds}s`;
}

getChristmas();
setInterval(getChristmas, 1000);
