import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxtemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }
  function mintemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }
  console.log(props.date);

  return (
    <div className="WeatherForecast-day ">
      {day()}
      <WeatherIcon
        className="WeatherForecast-icon "
        code={props.data.weather[0].icon}
        size={30}
      />

      <div className="WeatherForecast-temperatures">
        <span className="WeatherForecast-temp-max">{maxtemperature()}</span>
        <span className="WeatherForecast-temp-min"> {mintemperature()}</span>
      </div>
    </div>
  );
}
