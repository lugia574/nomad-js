const API_KEY = "f676441882de8ba82ca3efb542721bd9";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

  const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");

      weather.innerText = data.name;
      city.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}

function onGeoError() {
  alert("can't find you. No wether for you");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
