import React from "react";
import "./FormattedDate.css";

export default function Date(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wendsday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.date.getDay()];
  let hours = props.date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return (
    <div>
      <div className="Date">
        <p>Last updated at:</p>
        <span className="current-time">
          {" "}
          {day} {hours}:{minutes}
        </span>
      </div>
    </div>
  );
}
