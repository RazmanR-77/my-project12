// WeatherApp.js

import React from 'react';
import { useEffect } from 'react';
 

function WeatherApp() {  

    useEffect(() => {
        create_request();
      }, []);
  
let cityY;
      // Awesome javascript way 
      function create_request() {
        let city = cityY;  

        // fetch(api url )
        let API_URL = "http://api.openweathermap.org/data/2.5/weather?q=" + city +
            "&units=imperial&appid=e83b3c4c08285bf87b99f9bbc0abe3f0";
        // $.get(API_URL, deliver); 
        fetch(API_URL   )
        .then(res => res.json().then(data => {
            console.log(data);
            deliver(data);
        
        }) );

    }

    function deliver(response) {
        let result = "<h4>" + response.name + "</h4>" +
            "<ul>" +
            "<li> temperature: " + response.main.temp + " F </li>" +
            "<li> humidity: " + response.main.humidity + "% </li>" +
            "<li> wind speed: " + response.wind.speed + " mph</li>" +
            "</ul>";
        // $(".result").html(result);
    }

  return (
    <div>
      <h1>Open Weather Map <a href="https://openweathermap.org/current">API</a></h1>
      <h3>The Current Weather in</h3>
      <div class="result"></div>
      <input type="text" placeholder="City" value={cityY} />  

    
      <button onclick={(e) => create_request()}>Check Weather</button>
    </div>
  );
}

export default WeatherApp;


