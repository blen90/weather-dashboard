$(document).ready(function () {
    console.log("we're working")



    // var date = moment().format("MM/DD/YYYY");

    // Set currentDayEl to display currentDay in the header
    var currentDayEl = moment();
    $("#currentDay").text(currentDayEl.format('MMMM Do YYYY, h:mm:ss a'));
    console.log(currentDayEl);

    let cityArray = [];


    $(".searchBtn").on("click", function (e) {
        e.preventDefault();

        var value = $(this).siblings(".storage").val();
        console.log(value, "value");
        console.log(value);
        localStorage.setItem(value, "value");

        //Load saved activities from local storage and saved event stays on page
    // localStorage.getItem(".storage");

    // $("#search-history").val(localStorage.getItem(".storage"));

    

        var historyBtn = $('<button/>').attr({ type: 'button', name:'history', value:"value" });
        historyBtn.append(value);
        $(".history").append(value);
    })

   

    



    // const storageInput = document.querySelector(".storage");
    // console.log(storageInput);
    // const text = document.querySelector(".text");
    // console.log(text);

    // const buttonEl = document.querySelector(".searchBtn");
    // console.log(buttonEl);

    // const storedCity = localStorage.getItem("text");

    // if(storageInput) {
    //     text.textContent = storedCity
    // }

    // storageInput.addEventListener("input", letter =>  {
    //     console.log(letter);
    //     text.textContent = letter.target.value
    // })

    // const cityStorage = () => {
    //     localStorage.setItem("text", text.textContent)
    // }

    // buttonEl.addEventListener ("click", cityStorage);



    // // get html
    // var html= $('#search-city')[0].outerHTML;

    // // set localstorage
    // localStorage.setItem('#search-history', html);

    // // test if it works
    // alert(localStorage.getItem('html'));

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
            success: function (data) {
                console.log(data);

                var titleEl = $("<h2>").addClass("card-title").text(data.name);
                var tempEl = $("<h5>").addClass("card-text").text("Temperature: " + data.main.temp + " F");
                var humidityEl = $("<h5>").addClass("card-text").text("Humidity: " + data.main.humidity + " %");
                var windEl = $("<h5>").addClass("card-text").text("Wind speed: " + data.wind.speed + " MPH");
                // var currentIcon = $("<div>").addClass("card-body").text("Weather icon: " + data.weather[0].icon);       
                var currentIcon = $("<div>").addClass("card-body").prepend("<img src='http://openweathermap.org/img/w/" + data.weather[0].icon + ".png' alt='Icon depicting current weather.'>");
                console.log(currentIcon);

                var card = $("<div>").addClass("card");
                var cardBody = $("<div>").addClass("card-body");
                cardBody.append(titleEl, tempEl, humidityEl, windEl, currentIcon);
                card.append(cardBody);
                $("#today-weather").append(card);

            }
        })
    }


    function forecastSearch(searchValue) {
        console.log("hey we're in searchForecast!!")
        console.log(searchValue, "in searchForecast")

        var forecastUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + searchValue + "&appid=" + apiKey + "&units=metric";
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

                for (let i = 0; i < data.list.length; i+= 8) {
                    console.log(data.list);
                    let fiveDay = {
                        icon: data.list[i].weather[0].icon,
                        temp: data.list[i].main.temp,
                        humidity: data.list[i].main.humidity,
                        wind: data.list[i].main.wind
                    }

                
                var titleEl1 = $("<h2>").addClass("card-title").text(data.name);
                var tempEl1 = $("<h5>").addClass("card-text").text("Temperature: " + data.list[i].main.temp + " °F");
                var humidityEl1 = $("<h5>").addClass("card-text").text("Humidity: " + data.list[i].main.humidity + " %");
                var windEl1 = $("<h5>").addClass("card-text").text("Wind speed: " + data.list[i].wind.speed + " MPH");
                var currentIconEl = $("<div>").addClass("card-body").prepend("<img src='http://openweathermap.org/img/w/" + data.list[i].weather[0].icon + ".png' alt='Icon depicting current weather.'>");
                var card1 = $("<div>").addClass("card");
                var cardBody1 = $("<div>").addClass("card-body");
                cardBody1.append(titleEl1, tempEl1, humidityEl1, windEl1, currentIconEl);
                card1.append(cardBody1)
                $(".five-day").append(card1);

                }
            }

        })
    }

    //Uv Index function

    function uvIndex(coordinates) {
        console.log(coordinates, "UV INDEX")


        var IndexUrl = "https://api.openweathermap.org/data/2.5/uvi?lat=" + coordinates.lat + "&lon=" + coordinates.long + "&appid=" + apiKey;
        console.log(IndexUrl)

        $.ajax({
            type: "GET",
            url: IndexUrl,
            dataType: "json",
            success: function (data) {
                console.log("UV INDEX DATA", data.value)

            }
        })
    }

    $(".searchBtn").on("click", function (e) {
        e.preventDefault();
        console.log("we've been clicked!!")
        var searchValue = $('#search-city').val()
        console.log(searchValue)

        searchCity(searchValue);

        forecastSearch(searchValue);

        // cityArray.push(searchValue)
        // console.log(cityArray)


    })
})


