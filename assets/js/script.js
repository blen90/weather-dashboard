var searchBtnEl = document.querySelector("#search-button");
var cityHistoryEl = document.querySelector(".row")

//API key

var apiKey = "926ae894b8024b09ca286a6fee4ebb71";

//Search city history in localStorage

var cityHistory;
if (JSON.parse(localStorage.getItem("history")) != null)
    cityHistory = JSON.parse(localStorage.getItem("history"));
else
    citytyHistory = [];


//Search button click
var buttonClickHandler = function (event) {
  var search = event.target.getAttribute("#search-button");

  if (search) {
    cityWeather(search);

    cityHistoryEl.textContent = '';
  }
};




var cityWeather = function (apiKey) {
    var todayWeather = document.getElementById(".today-weather")
    todayWeather.className = '';

    var apiUrl = 'https://openweathermap.org/api/one-call-api/926ae894b8024b09ca286a6fee4ebb71/city';
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
// searchBtnEl.addEventListener("click, buttonClickHandler");
// console.log("We are searching");

// cityWeather();