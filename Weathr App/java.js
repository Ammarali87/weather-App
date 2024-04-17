

const apiKey = "b0a93cff0d517d781be1630ae80d0361";
 
function fetchWeather(city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
        .then(response => {
          if( response.ok == true){
              return response.json();
            }else{
              return Promise.reject("Error")
            }
        })
        .then(data => {
            displayWeather(data);
            fetchForecast(city); // Fetch forecast data
        })
        .catch(error => console.error('Error fetching weather:', error));
}

function fetchForecast(city) {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            return Promise.reject("No forecast found.");
        })
        .then(displayForecast)
        .catch(error => console.error('Error fetching forecast:', error));
}

function displayWeather(data) {
    var name = data.name;
    var weather = data.weather[0];
    var main = data.main;
    var wind = data.wind;

    document.querySelector(".city").innerText = "Weather in " + name;
    document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + weather.icon + ".png";
    document.querySelector(".description").innerText = weather.description;
    document.querySelector(".temp").innerText = main.temp + "°C";
    document.querySelector(".humidity").innerText = "Humidity: " + main.humidity + "%";
    document.querySelector(".wind").innerText = "Wind speed: " + wind.speed + " km/h";
    document.querySelector(".weather").classList.remove("loading");
    document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')";
}    
       
 
function displayForecast(data) {
    // Display forecast for the next day in cards 2 and 3
    var forecast = data.list[8]; // Assuming you want forecast for the next day
    var weather = forecast.weather[0];
    var main = forecast.main;
            
    var forecast2 = data.list[16]; // Assuming you want forecast for the next day
    var weather2 = forecast2.weather[0];
    var main2 = forecast2.main;

    // Card 2
    document.querySelector(".temp2").innerText = main.temp + "°C";
    document.querySelector(".icon2").src = "https://openweathermap.org/img/wn/" + weather.icon + ".png";
    document.querySelector(".description2").innerText = weather.description;
    document.querySelector(".humidity2").innerText = "Humidity: " + main.humidity + "%";
    document.querySelector(".wind2").innerText = "Wind speed: " + forecast.wind.speed + " km/h";

    // Card 3
    document.querySelector(".temp3").innerText = main2.temp + "°C";
    document.querySelector(".icon3").src = "https://openweathermap.org/img/wn/" + weather2.icon + ".png";
    document.querySelector(".description3").innerText = weather2.description;
    document.querySelector(".humidity3").innerText = "Humidity: " + main2.humidity + "%";
    document.querySelector(".wind3").innerText = "Wind speed: " + forecast2.wind.speed + " km/h";
}

  
function search() {
    const city = document.querySelector(".search-bar").value; // Trim any leading/trailing spaces
    if (city) {
        fetchWeather(city);
    } else {
        const searchBar = document.querySelector(".search-bar");
        searchBar.classList.add("is-invalid");
        searchBar.addEventListener("input", () => {
            searchBar.classList.remove("is-invalid"); // Remove the 'is-invalid' class when user starts typing again
        }, { once: true }); // Listen to input event only once
    }
}






 

// const apiKey = "b0a93cff0d517d781be1630ae80d0361";
 
// function fetchWeather(city) {
//     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
//         .then(response => {
//           if( response.ok == true){
//               return response.json();
//             }else{
//               return Promise.reject("Error")
//             }
//         })
//         .then(data => {
//             displayWeather(data);
//             fetchForecast(city); // Fetch forecast data
//         })
//         .catch(error => console.error('Error fetching weather:', error));
// }

// function fetchForecast(city) {
//     fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`)
//         .then(response => {
//             if (!response.ok) {
//                 return Promise.reject("No forecast found.");
//             }
//             return response.json();
//         })
//         .then(displayForecast)
//         .catch(error => console.error('Error fetching forecast:', error));
// }

// function displayWeather(data) {
//     var name = data.name;
//     var weather = data.weather[0];
//     var main = data.main;
//     var wind = data.wind;

//     document.querySelector(".city").innerText = "Weather in " + name;
//     document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + weather.icon + ".png";
//     document.querySelector(".description").innerText = weather.description;
//     document.querySelector(".temp").innerText = main.temp + "°C";
//     document.querySelector(".humidity").innerText = "Humidity: " + main.humidity + "%";
//     document.querySelector(".wind").innerText = "Wind speed: " + wind.speed + " km/h";
//     document.querySelector(".weather").classList.remove("loading");
//     document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')";
// }

// function displayForecast(data) {
//     // Display forecast for next day in cards 2 and 3
//     var forecast = data.list[8]; // Assuming you want forecast for the next day
//     var weather = forecast.weather[0];
//     var main = forecast.main;

//     var forecast2 = data.list[16]; // Assuming you want forecast for the next day
//     var weather2 = forecast2.weather[0];
//     var main2 = forecast2.main;
    

//     document.querySelector(".temp2").innerText = main.temp + "°C";
//     document.querySelector(".description2").innerText = weather.description;
//     document.querySelector(".humidity2").innerText = "Humidity: " + main.humidity + "%";
//     document.querySelector(".wind2").innerText = "Wind speed: " + forecast.wind.speed + " km/h";

//     document.querySelector(".temp3").innerText = main2.temp + "°C";
//     document.querySelector(".description3").innerText = weather2.description;
//     document.querySelector(".humidity3").innerText = "Humidity: " + main2.humidity + "%";
//     document.querySelector(".wind3").innerText = "Wind speed: " + forecast2.wind.speed + " km/h";
// }

// function search() {
//     const city = document.querySelector(".search-bar").value;
//     if (city) {
//         fetchWeather(city);
//     } else {
//         console.error('Please enter a city.');
//     }
// }
