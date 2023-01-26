const API_KEY = "a3481265185dfaf15cab819dc8561746"
const weather = document.querySelector("#weather .weather");
const city = document.querySelector("#weather .city");
const humid = document.querySelector("#weather .humid");
const wind = document.querySelector("#weather .wind");
const error = document.querySelector("#weather .error");


function onGeoOK(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            weather.innerText = `${data.weather[0].main} / ${Math.round(data.main.temp)}°C`;
            city.innerText = data.name;
            humid.innerText = `${data.main.humidity}%`;
            wind.innerText = `${data.wind.speed}m/s`;
        })
}
function onGeoError() {
    error.innerText = "Can't find you. No weather for you."
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError)