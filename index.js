function formatedDate() {
  let time = new Date();
  let hours = time.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = time.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let day = time.getDay();
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return `${days[day]} ${hours}:${minutes}`;
}
let currentElement = document.querySelector("#current");
currentElement.innerHTML = formatedDate();

function showTemperature(response) {
  let app = Math.round(response.data.main.temp);
  let appElement = document.querySelector("#app");
  appElement.innerHTML = `${app} °F`;
}

function search(event) {
  event.preventDefault();
  let h4 = document.querySelector("h4");
  let newCity = document.querySelector("#new-city");
  h4.innerHTML = newCity.value;
  let city = `${newCity.value}`;
  let units = "imperial";
  let apiKey = "a4748acc18b1b91de37c3e8310fc0ce3";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showTemperature);
}
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);
function showPosition(position) {
  let h1 = document.querySelector("h1");
  h1.innerHTML = `Your latitude is ${position.coords.latitude} and your longitude is ${position.coords.longitude}`;
}

function getCurrentPosition() {
  navigator.geolocation.getCurrentPosition(showPosition);
}

let button = document.querySelector("button");
button.addEventListener("click", getCurrentPosition);
