import {weatherData} from "./city.js"
let cityInput = document.getElementById('cityInput')
let checkBtn = document.getElementById("checkBtn")
let weatherOutput = document.getElementById('weatherInfo')

function weatherDisplay(){
    weatherData.forEach(el => {
    if(cityInput.value == el.city){
        weatherOutput.innerHTML = `
        <div class = 'item'>
            <p>${el.city}</p>
            <p>${el.temperature}°C</p>
            <p>${el.humidity}%</p>
            <p>${el.windSpeed}m/s</p>
            <p>weather:${el.weatherMain}</p>
            <p>type:${el.weatherDescription}</p>
        </div>`
    }
    })
}
checkBtn.addEventListener('click', weatherDisplay)