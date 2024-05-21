// WeatherApp.js
// author: by Razman Raman, developer  , date; 052024

import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import TemperatureWeatherDetail from './TemperatureWeatherDetail';
import WeatherIconDetail from './WeatherIconDetail';
import { weatherIcon } from './utils/IconsUtils';

function WeatherApp() {
  // author: by Razman Raman, developer  , date; 052024


  // initialise the state
  const [city, setCity] = useState("");
  const [currentWeather, setCurrentWeather] = useState({
    main: { temp: 0, humidity: 0 },
    wind: { speed: 0 },
    weather: [{ description: "" }]
  });

 

  useEffect(() => {
    checkWeather();
  }, []);




  function checkWeather() {
    // request weather data

    { console.log("city== ", city) }

    // `${GEO_API_URL}`
    try {
      let API_URL = "http://api.openweathermap.org/data/2.5/weather?q=" + `${city}` +
        "&units=celsius&appid=e83b3c4c08285bf87b99f9bbc0abe3f0";
      fetch(API_URL)
        .then(res => res.json().then(data => {
          console.log(API_URL, data);
          setCurrentWeather(data);

          console.log("weather== ", currentWeather);


        }));


    } catch (error) {
      console.log("error== ", error,
        currentWeather);

    }

  }



  function HumidWindTempOtherDetails() {
    return <>

      <ul class="list-grp">
        <li class="list-group-item active ">
          temperature:      {Math.round(currentWeather.main.temp) / 10} °C </li>

        <li class="list-group-item active "> humidity:   {currentWeather.main.humidity} % </li>
        <li class="list-group-item active "> wind speed:  {currentWeather.wind.speed} km/h</li></ul>


    </>
  }


  return (
    <div>

      <h1>OpenWeatherMap.org
        <span> <h3>   <a href="https://openweathermap.org/current" target="_blank">  <i class="fa fa-superscript" aria-hidden="true">API
          reference</i>  </a> </h3> </span>
      </h1>


      <h3>Check The Current Weather in</h3>
      <div>
        {currentWeather.main && currentWeather
          ? "Status: Ready" : "Status: Ready, to check the  weather. Need your input"}
      </div>


      <label>  </label>
      <input type="text" placeholder=" Country/City  " value={city} onChange={(e) => setCity(e.target.value)} />

      <button class="btn btn-primary d-auto" onClick={() => checkWeather()}  >Check Weather+</button>


      <div class="result">
        <div class="containerr">

          <div class="row d-auto">
            <div class="card  card-primary col-md-12">
              <div class="cardw-body">
                <h5 class="card-title card-primary col-md-8">{currentWeather.name}</h5>


                {/* weather icon   */}
                <div class="col-md-8">
                  {currentWeather.weather != null ?
                    <WeatherIconDetail src={weatherIcon(`${currentWeather.weather[0].icon}.png`)} /> : "No data"}

                </div>
                <div class="card-text col-md-8">

                  <h4>
                    <div>    {currentWeather.main != null ? <TemperatureWeatherDetail
                      temperature={Math.round(currentWeather.main.temp / 10)}
                      description={currentWeather.weather[0].description}
                    /> : "No data"}
                    </div>
                  </h4>


                </div>
              </div>
            </div>



          </div>

          <div>
            {currentWeather.main != null ?
              HumidWindTempOtherDetails() : "no data"}
          </div>
        </div>
      </div>

    </div>
  );


}


export default WeatherApp;


