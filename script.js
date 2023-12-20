const submitLocation = document.getElementById("submitLocation");
const city = document.getElementById("location");
const locationSection = document.getElementById("locationSection");
const weatherSection = document.getElementById("weatherSection");

locationSection.style.display = "none";
weatherSection.style.display = "none";

async function getWeather(locationValue) {
    const response = await fetch('https://api.weatherapi.com/v1/current.json?key=7cfaae2934514648884181626231912&q=$' + locationValue + '&aqi=no', {mode: 'cors'});
    const weatherData = await response.json(); 
    const cityName = document.getElementById("cityName");
    const latitude = document.getElementById("lat");
    const longitude = document.getElementById("lon");
    const time = document.getElementById("time");
    const condition = document.getElementById("condition");
    const temp = document.getElementById("temp");
    const humidity = document.getElementById("humidity");
    const wind = document.getElementById("wind");

    cityName.innerHTML = weatherData.location.name;
    console.log(weatherData.location.name);
    latitude.innerHTML = weatherData.location.lat;
    longitude.innerHTML = weatherData.location.lon;
    time.innerHTML = weatherData.location.localtime;
    condition.innerHTML = weatherData.current.condition.text;
    temp.innerHTML = weatherData.current.temp_c + "C";
    humidity.innerHTML = weatherData.current.humidity;
    wind.innerHTML = weatherData.current.wind_mph + " mph";
}


submitLocation.addEventListener("click", function(e) {
    e.preventDefault();
    if (city.value === "") {
        window.alert("Please enter a value")
    }
    else {
    locationSection.style.display = "block";
    weatherSection.style.display = "block";
    const selectedCity = city.value;
    getWeather(selectedCity);}

})



