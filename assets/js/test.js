$(document).ready(function () {
    console.log("were working")




    //API key

    var apiKey = "926ae894b8024b09ca286a6fee4ebb71";

    function searchCity(searchValue) {
        console.log("hey we're in searchCity!!!")
        console.log(searchValue, "in search city")
        

        var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + searchValue + "&appid=" + apiKey + "&units=imperial";
        // var fancyApiUrl =`api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid= ${apiKey}`
        console.log(apiUrl)

        $.ajax({
            type: "GET",
            url: apiUrl,
            dataType: "json",
            success: function(data){
                console.log(data)

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




    $(".searchBtn").on("click", function (e) {
        e.preventDefault();
        console.log("weve been clicked!!")
        var searchValue = $('#search-city').val()
        console.log(searchValue)
        searchCity(searchValue);
        // searchForecast():
        // searchUVIndex();
    })


})
