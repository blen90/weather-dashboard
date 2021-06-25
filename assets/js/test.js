$(document).ready(function () {
    console.log("we're working")

    //API key

    var apiKey = "926ae894b8024b09ca286a6fee4ebb71";

    function searchCity(searchValue) {
        console.log("hey we're in searchCity!!!");
        console.log(searchValue, "in search city");
        

        var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + searchValue + "&appid=" + apiKey + "&units=imperial";
        // var fancyApiUrl =`api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid= ${apiKey}`
        console.log(apiUrl)

        $.ajax({
            type: "GET",
            url: apiUrl,
            dataType: "json",
            success: function(data){
                console.log(data);

                var titleEl = $("<h2>").addClass("card-title").text(data.name);
                var tempEl = $("<h5>").addClass("card-text").text("Temperature: " + data.main.temp + " F");
                var humidityEl = $("<h5>").addClass("card-text").text("Humidity: " + data.main.humidity + " %");
                var windEl = $("<h5>").addClass("card-text").text("Wind speed: " +data.wind.speed + " MPH");
                // var iconEl = $("<div>").addClass("card-image").(data.weather.icon);
                var card = $("<div>").addClass("card");
                var cardBody = $("<div>").addClass("card-body");
                cardBody.append(titleEl, tempEl, humidityEl, windEl);
                card.append(cardBody)
                $("#today-weather").append(card);
            }
        })
        

    }


    function searchForecast(searchValue) {
        console.log("hey we're in searchForecast!!")
        console.log(searchValue, "in search city")

        var apiUrl = "api.openweathermap.org/data/2.5/forecast?q=" + searchValue + "&appid=" + apiKey + "&units=imperial";
        // var fancyApiUrl =`api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid= ${apiKey}`
        console.log(apiUrl)

        $.ajax({
            type: "GET",
            url: apiUrl,
            dataType: "json",
            success: function(data){
                console.log(data)
            }
                .then(function(fiveDayForecast) {
                    for (let i = 0; i != fiveDayForecast.list.length; i+=5 ) {
                        let city = {
                            date: fiveDayForecast.list[i].dt_txt,
                            icon: fiveDayForecast.list[i].weather[0].icon,
                            temp: fiveDayForecast.list[i].main.temp,
                            humidity: fiveDayForecast.list[i].main.humidity,
                            wind: fiveDayForecast.list[i].main.wind
                        }
                    }
                

                var titleEl1 = $("<h2>").addClass("card-title").text(data.name);
                var tempEl1 = $("<h5>").addClass("card-text").text("Temperature: " + data.main.temp + " F");
                var humidityEl1 = $("<h5>").addClass("card-text").text("Humidity: " + data.main.humidity + " %");
                var windEl1 = $("<h5>").addClass("card-text").text("Wind speed: " +data.wind.speed + " MPH");
                // var iconEl = $("<div>").addClass("card-image").(data.weather.icon);
                var card1 = $("<div>").addClass("card");
                var cardBody1 = $("<div>").addClass("card-body");
                cardBody1.append(titleEl1, tempEl1, humidityEl1, windEl1);
                card1.append(cardBody1)
                $("#five-day").append(card);
                    

            
        })
    })
}

var uvQueryURL = "https://api.openweathermap.org/data/2.5/uvi?lat="+latitude+"&lon="+longitude+"&appid="+ apiKey;

function getUVIndex(uvQueryURL){

    console.log("UV query URL : "+uvQueryURL);
    
    $.ajax({
            
        url: uvQueryURL,
        method: "GET"


    $(".searchBtn").on("click", function (e) {
        e.preventDefault();
        console.log("we've been clicked!!")
        var searchValue = $('#search-city').val()
        console.log(searchValue)
        searchCity(searchValue);
        searchForecast();
        // searchUVIndex();
    })


})
