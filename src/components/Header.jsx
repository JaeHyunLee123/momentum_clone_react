import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";

const API_KEY = "248e737097da22a4fd455191bad84c83";

const Wrapper = styled.div`
  display: flex;
  justify-content: right;

  span {
    font-size: 2rem;
    margin: 10px 5px 10px 5px;
  }
`;

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
      });
  }, [latitude, longitude]);

  return (
    <Wrapper>
      <span>{`${location} ${temp}℃ ${weather}`}</span>
    </Wrapper>
  );
};

export default Header;
