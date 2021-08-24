import "./App";
import "./Temp.css";

export default function Temp() {
  return (
    <div>
      <div className="Temp">
        <h2 className="temp">18</h2>
        <span className="degrees"> °C </span>
      </div>
      <div>
        <ul className="conditions">
          <li>
            Humidity: <span>80</span>%
          </li>
          <li>
            Wind: <span>5</span> m/h
          </li>
          <li>
            Air pressure: <span>1080</span> hPa
          </li>
        </ul>
      </div>
    </div>
  );
}
