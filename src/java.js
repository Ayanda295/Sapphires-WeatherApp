function updateWeather(response) {
    let temperatureElement = document.querySelector("#temperature")
    let temperature = response.data.temperature.current;
    let cityElement = document.querySelector("#city");
    cityElement.innerHTML = response.data.city;
    temperatureElement.innerHTML = Math.round(temperature);
    descriptionElement.innerHTML = response.data.condition.description;
    humidityElement.innerHTML = '${response.data.temperature.humidity}%';
    windSpeedElement.innerHTML = '${response.data.wind.speed}km/h';
    temperatureElement.innerHTML = Math.round(temperature);
    timeElement.innerHTML = formatDate (date);
    timeElement.innerHTML = '${date.getDay()} ${date.getHours()}:${date.getMinutes()}';
}

function handleSearchSubmit(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-form-input");
    let cityElement = document.querySelector("#app-city");
    cityElement.innerHTML = searchInput.value;
}

function searchCity(city) {
 let apiKey = "e9ba0e93do7684t3cff3919ff4b00bf7";
 let apiUrl = "https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}";
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);
let descriptionElement = document.querySelector("#description");
let humidityElement = document.querySelector("#humidity");
let windSpeedElement = document.querySelector("#wind-speed");
let timeElement = document.querySelector("#time");
let date = new Date (response.data.time *1000);

function formatDate (date) {
    let day = days[date.getDay()];
    let minutes = date.getMinutes();
    let hours = date.getHours();
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    if (minutes < 10) {
        minutes = '0${minutes}';
    }
    return '${day} ${hours}:${minutes}';
}

let icon = document.querySelector("icon");
iconElement.innerHTML = '<img src= "${response.data.condition.icon_url}" class = weather-app-icon" />';

axios.get(apiUrl).then(updateWeather); 