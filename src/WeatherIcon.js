export default function WeatherIcon(props) {
  let iconLink = `http://openweathermap.org/img/wn/${props.icon}@2x.png`;

  return <img src={iconLink} alt={props.alt}></img>;
}
