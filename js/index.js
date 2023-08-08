

search("egypt")

 function search(term){
    var weatherInfo = []
    weatherinfoTomorrow = []
var weatherReq = new XMLHttpRequest()
weatherReq.open("get" , `https://api.weatherapi.com/v1/forecast.json?key=ebd1ead904f84e2c9ee02051230708&q=${term}&days=3`)
weatherReq.send()
weatherReq.addEventListener("loadend" , function(){
    if(weatherReq.status == 200){
        console.log(JSON.parse(weatherReq.response))
        console.log(JSON.parse(weatherReq.response).forecast.forecastday[1])
        console.log(JSON.parse(weatherReq.response).forecast.forecastday)
        console.log(JSON.parse(weatherReq.response).forecast.forecastday[1].day.maxtemp_c)

        // weatherinfoTomorrow = JSON.parse(weatherReq.response).forecast.forecastday[1]
        weatherInfo =JSON.parse(weatherReq.response)
        console.log(weatherInfo.forecast.forecastday[1].day.maxtemp_c)
        console.log(weatherInfo.forecast.forecastday[1].date)
        var currentTemp= JSON.parse(weatherReq.response).current.temp_c
        var conditionText= JSON.parse(weatherReq.response).current.condition.text
        var conditionIcon= JSON.parse(weatherReq.response).current.condition.icon
        console.log(weatherInfo.current.condition.icon)
        console.log(`https:${weatherInfo.current.condition.icon}`)
        var currentWind= JSON.parse(weatherReq.response).current.wind_kph
        var currentWindDirection= JSON.parse(weatherReq.response).current.wind_dir
        var currentRain= JSON.parse(weatherReq.response).forecast.forecastday[0].day.daily_chance_of_rain
        displayCurrentTemp(weatherInfo)  
        displayTomorrowTemp(weatherInfo)
        displayAfterTomorrowTemp(weatherInfo)
        console.log(weatherInfo.location.name)
        var date = new Date(weatherInfo.forecast.forecastday[0].date)
       console.log(date.getDay().toLocaleString())
       var month = date.getDay().toLocaleString()
       console.log(date.setMonth(11))

        // console.log(date)
        
    }
})
}

function displayCurrentTemp(weatherInfo ){  
    
    var date = ""
    date=document.querySelector(".curren-time").innerHTML=`<span class="day ">${weatherInfo.forecast.forecastday[0].date}</span>`




         
    var cartona=""
        cartona+=` <div class="current-time-info  p-3">
        <span class="country fixed-color fs-2">${weatherInfo.location.name}</span>
        <div class="current-weather  d-flex justify-content-between  ">
            <h1 class="text-white current-weather-no">${ weatherInfo.current.temp_c}&degC</h1>
            <span class=" text-warning condition-icon"><img src="https:${weatherInfo.current.condition.icon}" alt="" class=""></span>
        </div>
        <span class="how-is-weather">${weatherInfo.current.condition.text}</span>
        <div class="about-current-weather  fixed-color d-flex justify-content-between py-2">
            <div class="rain">
                <span><i class="fa-solid fa-umbrella"></i><span class="rain-no ms-1">${ weatherInfo.forecast.forecastday[0].day.daily_chance_of_rain }% </span></span>           
            </div>
            <div class="wind">
                <span><i class="fa-solid fa-wind"></i><span class="current-wind ms-1">${ weatherInfo.current.wind_kph }km/h </span></span>
            </div>
            <div class="compas">
                <span><i class="fa-solid fa-compass"></i> <span class="wind-direction">${ weatherInfo.current.wind_dir} </span></span>
            </div>
        </div>
    </div>`
            document.querySelector(".first").innerHTML= cartona
    }





    function displayTomorrowTemp(weatherInfo){

        var date = ""
        date=document.querySelector(".tomorrow-day").innerHTML=`<span class="tomorrow-day ">${weatherInfo.forecast.forecastday[1].date}</span>`


        var cartona = ""

        cartona+=` <div class="current-weather py-5">
        <span class=" text-warning"><img src="https:${weatherInfo.forecast.forecastday[1].day.condition.icon}" alt=""></span>
        <h3 class="text-white tomorrow-maxweather-no pt-3">${weatherInfo.forecast.forecastday[1].day.maxtemp_c}&deg;C</h3>
        <h6 class="tomorrow-minweather-no fixed-color">${weatherInfo.forecast.forecastday[1].day.mintemp_c}C</h6>
        <span class="how-is-weather ">${weatherInfo.forecast.forecastday[1].day.condition.text}</span>
    </div>`

    document.querySelector(".tomorrow-time-info ").innerHTML=cartona

    }





















    
    function displayAfterTomorrowTemp(weatherInfo){

        var date = ""
        date=document.querySelector(".aftertomorrow-day").innerHTML=`<span class="tomorrow-day ">${weatherInfo.forecast.forecastday[2].date}</span>`





        var cartona = ""

        cartona+=` 

        <div class="current-weather py-5">
        <span class=" text-warning"><img src="https:${weatherInfo.forecast.forecastday[2].day.condition.icon}" alt=""></span>
        <h3 class="text-white aftertomorrow-maxweather-no pt-3">${weatherInfo.forecast.forecastday[2].day.maxtemp_c}&deg;C</h3>
        <h6 class="aftertomorrow-minweather-no fixed-color">${weatherInfo.forecast.forecastday[2].day.mintemp_c}C</h6>
        <span class="how-is-weather ">${weatherInfo.forecast.forecastday[2].day.condition.text}</span>
    </div>`

    document.querySelector(".aftertomorrow-time-info").innerHTML=cartona
    }










