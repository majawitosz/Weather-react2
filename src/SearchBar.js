import React, { useState } from "react";
import "./App";
import "./SearchBar.css";
import axios from "axios";
import "./Temp.css";
import "./Date.css";

export default function SearchBar(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(resposne) {
    console.log(resposne.data);
    setWeatherData({
      ready: true,
      temperature: resposne.data.main.temp,
      wind: resposne.data.wind.speed,
      city: resposne.data.name,
      humidity: resposne.data.main.humidity,
      pressure: resposne.data.main.pressure,
      iconUrl:
        "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/279/sun-behind-cloud_26c5.png",
      description: resposne.data.weather[0].description,
      date: "Monday 16:24",
    });
  }
  if (weatherData.ready) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-9 col-md-10">
            <form>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter a city..."
                  aria-label="City"
                  aria-describedby="city"
                  autoComplete="off"
                />
                <input
                  className="btn btn-outline-secondary"
                  type="submit"
                  value="Search"
                />
              </div>
            </form>
          </div>
          <div className="col-3 col-md-2">
            <button className="locationButton">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="bi bi-geo-alt"
                viewBox="0 0 16 16"
              >
                <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
              </svg>
            </button>
          </div>
        </div>
        <div className="City">
          <h1>{weatherData.city}</h1>
        </div>
        <div className="row">
          <div className="Date">
            <p>Last updated at:</p>
            <span className="current-time">{weatherData.date}</span>
          </div>
        </div>

        <div className="row">
          <div className="col-6 col-sm-4 col-md-3 main-icon">
            <div className="Icon">
              <img src={weatherData.iconUrl} alt={weatherData.description} />
            </div>
          </div>
          <div className="col-6 col-sm-8 col-md-9">
            <div className="Temp">
              <h2 className="temp">{Math.round(weatherData.temperature)}</h2>
              <span className="degrees"> °C </span>
            </div>
            <div>
              <ul className="conditions">
                <li>
                  Humidity: <span>{weatherData.humidity}</span>%
                </li>
                <li>
                  Wind: <span>{Math.round(weatherData.wind)}</span> m/h
                </li>
                <li>
                  Air pressure: <span>{weatherData.pressure}</span> hPa
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "e3d19480e0bceb73505db2a3f2659405";

    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
