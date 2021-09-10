$(document).ready(function () {
    console.log("we're working")


    // Set currentDayEl to display currentDay in the header
    var currentDayEl = moment();
    $("#currentDay").text(currentDayEl.format('MMMM Do YYYY, h:mm:ss a'));
    console.log(currentDayEl);

    let cityArray = [];


    let clickCity;
    let newButton;

    function renderButtons() {
        $("#cityButton").html("");
        for (var i = 0; i < cityArray.length; i++) {
            var city = cityArray[i];
            console.log(city)
            newButton = $("<button>");
            newButton.addClass("btn searchResult display-4 mx-auto");
            newButton.attr("data-name", city);
            newButton.attr("id", "cityButton");
            newButton.text(city);
            $("#search-history").prepend(newButton);
            console.log(newButton);
        }
    }

    $("#search-history").on('click', "button", function (event) {
        event.preventDefault();
        clickCity = $(this).attr("data-name")
        console.log(clickCity)
        searchCity(clickCity);
        forecastSearch(clickCity);

        //clear searchHistory
    })

    function Storage() {
        var storedCity = JSON.parse(localStorage.getItem("cityHistory"))
        if (storedCity !== null) {
            cityArray = storedCity
        }
        renderButtons();
    }


    //API key

    var apiKey = "926ae894b8024b09ca286a6fee4ebb71";

    function searchCity(searchValue) {
        console.log("hey we're in searchCity!!!");
        console.log(searchValue, "in search city");
        var DayEl = moment().format('L');
        
     
        var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + searchValue + "&appid=" + apiKey + "&units=imperial";
        // var fancyApiUrl =`api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid= ${apiKey}`
        console.log(apiUrl)



        $.ajax({
            type: "GET",
            url: apiUrl,
            dataType: "json",
            success: function (data) {
                console.log(data);

                var titleEl = $("<h4>").addClass("card-title").text(data.name);
                var headerEl = $("<h5>").addClass("card-header").text(DayEl);
                var tempEl = $("<h6>").addClass("card-text").text("Temperature: " + data.main.temp + " °F");
                var humidityEl = $("<h6>").addClass("card-text").text("Humidity: " + data.main.humidity + " %");
                var windEl = $("<h6>").addClass("card-text").text("Wind speed: " + data.wind.speed + " MPH");
                // var currentIcon = $("<div>").addClass("card-body").text("Weather icon: " + data.weather[0].icon);       
                var currentIcon = $("<div>").addClass("card-body").prepend("<img src='http://openweathermap.org/img/w/" + data.weather[0].icon + ".png' alt='Icon depicting current weather.'>");
                console.log(currentIcon);


                var card = $("<div>").addClass("card");
                var cardBody = $("<div>").addClass("card-body-weather");
                cardBody.append(titleEl, headerEl, tempEl, humidityEl, windEl, currentIcon);
                card.append(cardBody);
                $("#today-weather").append(card); 

            }
        })
    }


    function forecastSearch(searchValue) {
        console.log("hey we're in searchForecast!!")
        console.log(searchValue, "in searchForecast")

        var forecastUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + searchValue + "&appid=" + apiKey + "&units=imperial";
        console.log(forecastUrl)
        

        $.ajax({
            type: "GET",
            url: forecastUrl,
            dataType: "json",
            success: function (data) {
                console.log(data.list[2], data.list[10], data.list[18], data.list[26], data.list[32])
                // console.log("GETTING COORDINATES", data.city.coord)
                let coordinates = { lat: data.city.coord.lat, long: data.city.coord.lon }
                uvIndex(coordinates)

                for (let i = 0; i < data.list.length; i += 8) {
                    console.log(data.list);
                    let fiveDay = {
                        icon: data.list[i].weather[0].icon,
                        temp: data.list[i].main.temp,
                        humidity: data.list[i].main.humidity,
                        wind: data.list[i].main.wind
                    }

                    var cityEl = $("<h4>").addClass("card-text").text(searchValue);
                    // var headerEl = $("<h5>").addClass("card-header").text(currentDay1);
                    var tempEl1 = $("<h6>").addClass("card-text").text("Temperature: " + data.list[i].main.temp + " °F");
                    var humidityEl1 = $("<h6>").addClass("card-text").text("Humidity: " + data.list[i].main.humidity + " %");
                    var windEl1 = $("<h6>").addClass("card-text").text("Wind speed: " + data.list[i].wind.speed + " MPH");
                    var currentIconEl = $("<div>").addClass("card-body").prepend("<img src='http://openweathermap.org/img/w/" + data.list[i].weather[0].icon + ".png' alt='Icon depicting current weather.'>");
                    var card1 = $("<div>").addClass("card");
                    var cardBody1 = $("<div>").addClass("card-body-forecast");
                    cardBody1.append(cityEl, tempEl1, humidityEl1, windEl1, currentIconEl);
                    card1.append(cardBody1)
                    $(".five-day").append(card1);

                

                }
            }


        })
    }

    //Uv Index function

    function uvIndex(searchValue) {
        // console.log(current, "UV INDEX")


        var IndexUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${searchValue.lat}&lon=${searchValue.long}&appid=${apiKey}`;
        console.log(IndexUrl)

        $.ajax({
            type: "GET",
            url: IndexUrl,
            dataType: "json",
            success: function (uvi) {
                console.log("UV INDEX current", uvi.current.uvi)


                var indexUv = $("<h6>").text("UV Index: " + uvi.current.uvi);
                console.log(uvi.current.uvi);

                if (uvi.current.uvi <= 4) {
                    $(indexUv).css("color", "green");
                }

                else if (uvi.current.uvi > 4 && uvi.current.uvi <= 7) {
                    $(indexUv).removeClass("color", "green");
                    $(indexUv).css("color", "orange");
                }

                else {
                    $(indexUv).removeClass("color", "green");
                    $(indexUv).removeClass("color", "orange");
                    $(indexUv).css("color", "red");

                }

                $(".card-body-weather").append(indexUv);
            }


        })

    }

    $(".searchBtn").on("click", function (e) {
        e.preventDefault();

        console.log("we've been clicked!!")
        var searchValue = $('#search-city').val()
        console.log(searchValue)

        if (searchValue === "") {
            alert("Please type in a city")
        }
        else {
            cityArray.push(searchValue)
            localStorage.setItem("cityHistory", JSON.stringify(cityArray));


            searchCity(searchValue);

            forecastSearch(searchValue);

            renderButtons();
            // uvIndex(data.value);

            cityArray.push(searchValue)
            console.log(cityArray)

        }


    })
    Storage();
})


        