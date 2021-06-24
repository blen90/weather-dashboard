
// var cityHistoryEl = document.getElementById("#search-city")


//API key

var apiKey = "926ae894b8024b09ca286a6fee4ebb71";

//Search city history in localStorage

var cityHistory;
if (JSON.parse(localStorage.getItem("history")) != null)
  cityHistory = JSON.parse(localStorage.getItem("history"));
else
  cityHistory = [];

//Search button click
var searchBtnEl = document.querySelector("#search-button");


searchCity

function searchCityWeather() {
  var searchCity = document.getElementById("#search-city").value;
  if (document.getElementById("#search-city").value !== "") {

    // weatherSearch(search);
    // forecastSearch(search);

    // saveSearch(search);
    // renderSearch();

    document.getElementById("#search-city").value = "";
  }
}

function searchCity() {
  var today = document.getElementById("today");
  today.className = "";

  var apiUrl = "api.openweathermap.org/data/2.5/weather?id={city id}&appid=926ae894b8024b09ca286a6fee4ebb71";
  console.log(apiUrl)

  fetch(apiUrl)
    .then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
          console.log(data);
          cityWeather(data, user);
        });
      } else {
        alert('Error: ' + response.statusText);
      }
    })
    .catch(function (error) {
      alert('Unable to connect to Open Weather Map');
    });

  var todayCardHeader = document.createElement("h3");
  todayCardHeader.className = "todayCard";
  todayCardHeader.textContent = data.name + " - " + moment().format("LL");

  var searchCardContainer = document.createElement("div");
  searchCardContainer.classList.add('card', 'bg-light', 'text-dark', 'mb-3', 'p-3');

  var searchCard = document.createElement("div");
  searchCard.className = "card-box"

  var tempCard = document.createElement("p");
  tempCard.className = "text";
  tempCard.textContent = "Temperature: " + data.main.temp + "°F";

  var humidityCard = document.createElement("p");
  humidityCard.className = "text";
  humidityCard.textContent = "Humidity: " + data.main.humidity + "°F";

  var windCard = document.createElement("p");
  windCard.className = "text";

  var indexUv = document.createElement('p');
  indexUv.className = "text";
}
//icons provided to us by api
//city
//todays forecast
//5 day forecast

//city is being stored - not the forecast just the list of cities

//click on the city and reuse function


//function that runs api from clicking or typing (used twice)

//API KEY

//

//var weatherApiUrl = "website/city=xxxxxx&apikey=APIKEY"

//use bootstrap to create layout


//search button listener
// 
// console.log("We are searching");

// cityWeather();
// searchBtnEl.addEventListener("click, searchCity");