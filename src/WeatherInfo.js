import React from "react";
import FormattedDate from "./FormattedDate";
import "./WeatherInfo.css";
import WeatherIcon from "./WeatherIcon";

export default function WetherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="container">
        <div className="City">
          <h1>{props.data.city}</h1>
        </div>
        <div className="row"></div>
        <FormattedDate date={props.data.date} />
        <div className="row">
          <div className="col-6 col-sm-4 col-md-3 main-icon">
            <WeatherIcon code={props.data.icon} alt={props.data.description} />
          </div>
          <div className="col-6 col-sm-8 col-md-9">
            <div className="Temp">
              <h2 className="temp">{Math.round(props.data.temperature)}</h2>
              <span className="degrees"> °C </span>
            </div>
            <div>
              <ul className="conditions">
                <li>
                  Humidity: <span>{props.data.humidity}</span>%
                </li>
                <li>
                  Wind: <span>{Math.round(props.data.wind)}</span> m/h
                </li>
                <li>
                  Air pressure: <span>{props.data.pressure}</span> hPa
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
