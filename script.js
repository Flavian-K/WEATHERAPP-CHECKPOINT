const apiKey = "e7910e340947dd8dadff8ed672f1f796";
const weatherContainer = document.getElementById("weather-container");
const locationElement = document.getElementById("location");
const temperatureElement = document.getElementById("temperature");
const descriptionElement = document.getElementById("description");

// Function to get weather data
async function getWeather(city) {
	const response = await fetch(
		`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
	);

	const data = await response.json();
	updateWeather(data);
}

// Function to update the app with weather data
function updateWeather(data) {
	if (data && data.name && data.sys && data.main && data.weather) {
		locationElement.textContent = `${data.name}, ${data.sys.country}`;
		temperatureElement.textContent = `${data.main.temp}°C`;
		descriptionElement.textContent = data.weather[0].description;
	} else {
		locationElement.textContent = "Weather data unavailable";
		temperatureElement.textContent = "";
		descriptionElement.textContent = "";
	}
}

// Call the function with a default city
getWeather("Nairobi");
