$(document).ready(function () {
    console.log("we're working")

    // var date = moment().format("MM/DD/YYYY");

    // Set currentDayEl to display currentDay in the header
    var currentDayEl = moment();
    $("#currentDay").text(currentDayEl.format('MMMM Do YYYY, h:mm:ss a'));
    console.log(currentDayEl);

    const storageInput = document.querySelector(".storage");
    console.log(storageInput);
    const text = document.querySelector(".text");
    console.log(text);

    const buttonEl = document.querySelector(".searchBtn");
    console.log(buttonEl);

    const storedCity = localStorage.getItem("text");

    if(storageInput) {
        text.textContent = storedCity
    }

    storageInput.addEventListener("input", letter =>  {
        console.log(letter);
        text.textContent = letter.target.value
    })

    const cityStorage = () => {
        localStorage.setItem("text", text.textContent)
    }

    buttonEl.addEventListener ("click", cityStorage);


        
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
        console.log(searchValue, "in search city")

        var forecastUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + searchCity + "&appid=" + apiKey;
        console.log(forecastUrl)

        $.ajax({
            type: "GET",
            url: forecastUrl,
            dataType: "json",
            success: function (data) {
                console.log(data)
            }(function (fiveDay) {
                for (let i = 0; i != fiveDay.list.length; i += 5) {
                    let fiveDay = {
                        date: fiveDay.list[i].dt_txt,
                        icon: fiveDay.list[i].weather[0].icon,
                        temp: fiveDay.list[i].main.temp,
                        humidity: fiveDay.list[i].main.humidity,
                        wind: fiveDay.list[i].main.wind

                    }
                }

                var titleEl1 = $("<h2>").addClass("card-title").text(data.name);
                var tempEl1 = $("<h5>").addClass("card-text").text("Temperature: " + data.main.temp + " F");
                var humidityEl1 = $("<h5>").addClass("card-text").text("Humidity: " + data.main.humidity + " %");
                var windEl1 = $("<h5>").addClass("card-text").text("Wind speed: " + data.wind.speed + " MPH");
                // var iconEl = $("<div>").addClass("card-image").(data.weather.icon);
                var card1 = $("<div>").addClass("card");
                var cardBody1 = $("<div>").addClass("card-body");
                cardBody1.append(titleEl1, tempEl1, humidityEl1, windEl1);
                card1.append(cardBody1)
                $("#five-day").append(card);



            })

        })

    }

    //Uv Index function

    function uvIndex() {
        console.log(uvIndex, "in uvi");

        // var IndexUrl = `https://api.openweathermap.org/v3/uvi/{valueSearch}/{datetime}.json?appid={api_key}`
        // console.log(IndexUrl);

        var IndexUrl = "https://api.openweathermap.org/data/2.5/uvi?lat=&lon=" + "&appid=" + apiKey;
        console.log(uvIndex)

        $.ajax({
            type: "GET",
            url: IndexUrl,
            dataType: "json",
            success: function (data) {
                console.log(data)
            }
        })
    }

    $(".searchBtn").on("click", function (e) {
        e.preventDefault();
        console.log("we've been clicked!!")
        var searchValue = $('#search-city').val()
        console.log(searchValue)

        searchCity(searchValue);

        forecastSearch();

        uvIndex();

    })
})


