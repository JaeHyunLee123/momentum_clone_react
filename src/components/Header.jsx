import { useEffect } from "react";
import { useState } from "react";

const API_KEY = "248e737097da22a4fd455191bad84c83";

const Header = () => {
  const [latitude, setLatitude] = useState(-1);
  const [longitude, setLongitude] = useState(-1);

  const [location, setLocation] = useState("");
  const [temp, setTemp] = useState("");
  const [weather, setWeather] = useState("");

  useEffect(() => {
    window.addEventListener("load", () => {
      if (window.navigator.geolocation) {
        window.navigator.geolocation.getCurrentPosition((event) => {
          setLatitude(event.coords.latitude);
          setLongitude(event.coords.longitude);
        });
      }
    });
  });

  useEffect(() => {
    if (latitude === -1 && longitude === -1) return;

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setLocation(data.name);
        setTemp(data.main.temp);
        setWeather(data.weather[0].main);
        //weather.innerText = `${data.name} ${data.main.temp}℃ ${data.weather[0].main}`;
      });
  }, [latitude, longitude]);

  return (
    <div>
      <span>{location}</span>
      <span>{temp}</span>
      <span>{weather}</span>
    </div>
  );
};

export default Header;
