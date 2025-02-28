const apiKey = "5ff210c63ec8a1561fa7d8d1481b3915";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

// Elementi del DOM
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    try {
        if (!city || city.trim() === "") {
            throw new Error("Il nome della città è obbligatorio.");
        }

        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

        if (!response.ok) {
            throw new Error("Errore nella richiesta: " + (await response.json()).message);
        }

        const data = await response.json();
        console.log(data);
        
        // Aggiorna il DOM (sezione già presente nel tuo codice)
        document.querySelector("#city").innerHTML = data.name;
        document.querySelector("#temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector("#humidity").innerHTML = data.main.humidity + "%";
        document.querySelector("#wind").innerHTML = data.wind.speed + " km/h";
        
        // Mostra l'icona del meteo
        switch (data.weather[0].main) {
            case "Clouds":
                weatherIcon.src = "img/images/clouds.png";
                break;
            case "Clear":
                weatherIcon.src = "img/images/clear.png";
                break;
            case "Rain":
                weatherIcon.src = "img/images/rain.png";
                break;
            case "Drizzle":
                weatherIcon.src = "img/images/drizzle.png";
                break;
            case "Mist":
                weatherIcon.src = "img/images/mist.png";
                break;
            default:
                weatherIcon.src = "img/images/default.png";
        }
    } catch (error) {
        console.error("Errore:", error.message);
        alert(error.message);
    }

    document.querySelector(".weather").style.display = "block";
}

// Aggiunge un evento click al pulsante
searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value.trim());
});

