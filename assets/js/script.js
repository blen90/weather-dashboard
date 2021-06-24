
// var cityHistoryEl = document.getElementById("#search-city")


//API key

// var apiKey = "926ae894b8024b09ca286a6fee4ebb71";

//Search city history in localStorage

// var cityHistory;
// if (JSON.parse(localStorage.getItem("history")) != null)
//   cityHistory = JSON.parse(localStorage.getItem("history"));
// else
//   cityHistory = [];

//Search button click
  var searchBtnEl = document.getElementById("search-button")
  searchBtnEl.addEventListener('click', search);

 




// function searchCityWeather() {
  
//   // var searchCity = document.getElementById("#search-city").value;
//   // if (document.getElementById("#search-city").value !== "") {

//   //   // weatherSearch(search);
//   //   // forecastSearch(search);

//   //   // saveSearch(search);
//   //   // renderSearch();

//   //   document.getElementById("#search-city").value = "";
//   // }
// }

function search() {
  console.log("hey were clicked")

}
  // var today = document.getElementById("today");
  // today.className = "";

  // var apiUrl = "api.openweathermap.org/data/2.5/weather?id={city id}&appid=926ae894b8024b09ca286a6fee4ebb71";
  // console.log(apiUrl)

  // fetch(apiUrl)
  //   .then(function (response) {
  //     return response.json();
  //   })
  
    // .then(function (data) {
    //   var todayWeather = document.getElementById("#today-weather");
    //   todayWeather.textContent = "";


    //   var todayCardHeader = document.createElement("h3");
    //   todayCardHeader.className = "todayCard";
    //   todayCardHeader.textContent = data.name + " - " + moment().format("LL");

    //   var searchCardContainer = document.createElement("div");
    //   searchCardContainer.classList.add('card', 'bg-light', 'text-dark', 'mb-3', 'p-3');

    //   var searchCard = document.createElement("div");
    //   searchCard.className = "card-box"

    //   var tempCard = document.createElement("p");
    //   tempCard.className = "text";
    //   tempCard.textContent = "Temperature: " + data.main.temp + "°F";

    //   var humidityCard = document.createElement("p");
    //   humidityCard.className = "text";
    //   humidityCard.textContent = "Humidity: " + data.main.humidity + "%";

    //   var windCard = document.createElement("p");
    //   windCard.className = "text";
    //   humidityCard.textContent = "Wind Speed: " + data.main.wind_speed + "mph";


    //   var uvI = document.createElement('p');
    //   uvI.className = "text";
    //   uvI = "UV Index: " + data.main.uvi;

    //   var imgEl = document.createElement("img");
    //   imgEl.setAttribute("src", `http://openweathermap.org/img/w/${data.weather[0].icon}.png`);


    //   todayCardHeader.appendChild(imgEl);
    //   searchCardContainer.appendChild(searchCardContainer);
    //   searchCard.appendChild(tempeCard);
    //   searchCard.appendChild(humidityCard);
    //   searchCard.appendChild(windCard);
    //   searchCard.appendChild(uvI);
    //   searchCardContainer.appendChild(searchCard);
    //   today.appendChild(searchCardContainer);

    // });
  
  
  // function fiveDaySearch(search) {
  //   var forecast = document.getElementById("#forecast");
  //   forecast.className = "";

  //   var fiveDayForecast = document.getElementById("#five-day");
  //   fiveDayForecast.innerHTML = "";

  //   var apiUrl = "api.openweathermap.org/data/2.5/weather?id={city id}&appid=926ae894b8024b09ca286a6fee4ebb71";
  //   console.log(apiUrl)

  //   fetch(apiUrl)
  //     .then(function (response) {
  //       return response.json();
  //     })
  //     .then(function (data) {
  //       var fiveDayWeather = document.getElementById("#five-day");
  //       fiveDayWeather.textContent = "";





  //     });
  // }

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
// 


