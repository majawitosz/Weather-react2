import React from "react";

export default function WeatherIcon(props) {
  return (
    <div className="Icon">
      <img src={`/pictures/${props.code}.png`} alt={props.alt} />
    </div>
  );
}
