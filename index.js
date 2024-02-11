// https://api.openweathermap.org/data/2.5/weather?q=Faisalabad&appid=16bfa98849718de13b6e8978b87d47b8&units=metric


const searchInput = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const image = document.querySelector('.icon');


async function getWeather(city){
    var res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=16bfa98849718de13b6e8978b87d47b8&units=metric`);
    if(res.status == 404){
        document.querySelector('.error').style.display = "block";
    }
    var data = await res.json();
    console.log(data);
    document.querySelector('.celcius').innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.humidityP').innerHTML = Math.round(data.main.humidity) +"%";
    document.querySelector('.windS').innerHTML = Math.round(data.wind.speed) + "km/h";

if(data.weather[0].main == "Clouds"){
    image.src = "./images/clouds.png"
}
else if(data.weather[0].main == "Clear"){
    image.src = "/images/sun.png"
}
else if(data.weather[0].main == "Rain"){
    image.src = "/images/rain.png"
}
else if(data.weather[0].main == "Drizzle"){
    image.src = "/images/drizzle.png"
}
else if(data.weather[0].main == "Mist"){
    image.src = "/images/mist.png"
}
else if(data.weather[0].main == "Snow"){
    image.src = "/images/snow.png"
}
else if(data.weather[0].main == "Thunderstorm"){
    image.src = "/images/storm.png"
}
else if(data.weather[0].main == "Smoke"){
    image.src = "/images/smoke.png"
}
else if(data.weather[0].main == "Dust"){
    image.src = "/images/dust.png"
}
else if(data.weather[0].main == "Ash"){
    image.src = "/images/ash.png"
}

else if(data.weather[0].main == "Tornado"){
    im
    age.src = "/images/tornado.png"
}

else if(data.weather[0].main == "Haze"){
    image.src = "/images/haze.png"
}
}

searchBtn.addEventListener('click', () => {
    getWeather(searchInput.value)

})
getWeather();
