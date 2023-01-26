const API_KEY = "a3481265185dfaf15cab819dc8561746"
const weather = document.querySelector("#weather .weather");
const city = document.querySelector("#weather .city");
const humid = document.querySelector("#weather .humid");
const wind = document.querySelector("#weather .wind");
const weatherIcon = document.querySelector("#weather .icon_weather")
const icon = document.querySelectorAll("#weather .icon");
const error = document.querySelector("#weather .error");

function onGeoOK(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    error.style.display="none";
    const weatherImage = document.createElement("img"); //html에 <img> 태그를 넣는다
    fetch(url)
        .then(response => response.json())
        .then(data => {
            weather.innerText = `${data.weather[0].main} / ${Math.round(data.main.temp)}°C`;
            city.innerText = data.name;
            humid.innerText = `${data.main.humidity}%`;
            wind.innerText = `${data.wind.speed}m/s`;
            weatherImage.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
            weatherIcon.appendChild(weatherImage);
            for ( let i = 0; i < icon.length; i++ ) {
                icon[i].style.display = 'block';
            }
        });
}
function onGeoError() {
    error.innerText = "Can't find you. No weather for you."
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError)




