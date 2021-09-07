import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="col-3 ">
        <div className="WeatherForecast-day">
          Mon
          <div>
            <WeatherIcon
              className="WeatherForecast-icon "
              code="09d"
              size={30}
            />
          </div>
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temp-max">19°</span>
            <span className="WeatherForecast-temp-min">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
