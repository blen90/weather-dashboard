
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

// fetch(apiUrl)
//   .then(function (response) {
//     if (response.ok) {
//       response.json().then(function (data) {
//         console.log(data);
//         cityWeather(data, user);
//       });
//     } else {
//       alert('Error: ' + response.statusText);
//     }
//   })
//   .catch(function (error) {
//     alert('Unable to connect to Open Weather Map');
//   });
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