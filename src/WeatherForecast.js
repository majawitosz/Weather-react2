import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);
  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }
  console.log(props);

  if (loaded) {
    console.log(forecast);
    return (
      <div className="WeatherForecast">
        <div className="col-3 ">
          <div className="WeatherForecast-day">
            {forecast[0].dt}
            <div>
              <WeatherIcon
                className="WeatherForecast-icon "
                code={forecast[0].weather[0].icon}
                size={30}
              />
            </div>
            <div className="WeatherForecast-temperatures">
              <span className="WeatherForecast-temp-max">
                {forecast[0].temp.max}°
              </span>
              <span className="WeatherForecast-temp-min">
                {" "}
                {forecast[0].temp.min}°
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = `e3d19480e0bceb73505db2a3f2659405`;
    let lon = props.coordinates.lon;
    let lat = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
