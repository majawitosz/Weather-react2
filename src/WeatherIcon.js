import React from "react";

export default function WeatherIcon(props) {
  return (
    <div>
      <img
        src={`/pictures/${props.code}.png`}
        alt={props.alt}
        size={props.size}
      ></img>
    </div>
  );
}
