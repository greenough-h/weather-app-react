export default function FormattedDate(props) {
  let date = new Date(props.date);

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let shortdays = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];

  let day = days[date.getDay()];
  let hour = date.getHours();
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (props.type === "short") {
    return shortdays[date.getDay()];
  } else {
    return `${day} ${hour}:${minutes}`;
  }
}
