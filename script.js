const apikey = "aff560ee1a9a32fbcbcf5f5f4cf410f3";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?&units=metric";
const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weathericon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiurl + `&q=${city}` + `&appid=${apikey}`);
  var data = await response.json();
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";

  if (data.weather[0].main == "Clouds") {
    weathericon.src = "images/clouds.png";
  } else if (data.weather[0].main == "Clear") {
    weathericon.src = "images/clear.png";
  } else if (data.weather[0].main == "Mist") {
    weathericon.src = "images/mist.png";
  } else if (data.weather[0].main == "Snow") {
    weathericon.src = "images/snow.png";
  } else if (data.weather[0].main == "Rain") {
    weathericon.src = "images/rain.png";
  } else if (data.weather[0].main == "Drizzle") {
    weathericon.src = "images/drizzle.png";
  }
  document.querySelector(".weather").style.display = "block";
}

searchbtn.addEventListener("click", () => {
  checkWeather(searchbox.value);
});
