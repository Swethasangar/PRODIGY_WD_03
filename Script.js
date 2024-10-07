// Api
const apiKey = "178d608dc954698a9a39780b239b5d80";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

// Selecting class name
const searchBox = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const weatherType = document.querySelector(".weather-type");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  // Error
  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    var data = await response.json();
    console.log(data);

    //  Selecting data
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + `°c`;
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".humidity").innerHTML = data.main.humidity + `%`;
    document.querySelector(".wind").innerHTML = data.wind.speed + `Km/hr`;

    //  Weather Icon
    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "Images/clouds.png";
      weatherType.innerHTML = "Cloudy";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "Images/clear.png";
      weatherType.innerHTML = "Clear";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "Images/drizzle.png";
      weatherType.innerHTML = "Drizzle";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "Images/mist.png";
      weatherType.innerHTML = "Mist";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "Images/rain.png";
      weatherType.innerHTML = "Rain";
    } else if (data.weather[0].main == "Snow") {
      weatherIcon.src = "Images/snow.png";
      weatherType.innerHTML = "Snow";
    }
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

// Click Button
searchButton.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
