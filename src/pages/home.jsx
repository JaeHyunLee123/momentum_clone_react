import { useState } from "react";
import Background from "../components/Background";
import Clock from "../components/Clock";
import Greetings from "../components/Greetings";
import Pomodoro from "../components/Pomodoro";
import Header from "../components/Header";
import TotalFocusTime from "../features/totalFocusTime/TotalFocusTime";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700&display=swap');

  body {
    font-family: "Merriweather", serif;
    color: whitesmoke;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url(${Background});
    background-size: cover;
    background-attachment: fixed;
    width: 97vw;
    height: 100vh;
  }
`;

const Home = () => {
  const [isClock, setIsClock] = useState(true);

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Clock isHidden={!isClock} setIsClock={setIsClock} />
      <Pomodoro isHidden={isClock} setIsClock={setIsClock} />
      <Greetings />
      <TotalFocusTime />
    </div>
  );
};

export default Home;
