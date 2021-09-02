import images from "./images/index";

export default function WeatherIcon(props) {
  return (
    <div className="Icon">
      <img src={images.a} alt={props.alt} />
    </div>
  );
}
