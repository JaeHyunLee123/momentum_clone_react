import { useState } from "react";
import Background from "../components/Background";
import Clock from "../components/Clock";
import Greetings from "../components/Greetings";
import Pomodoro from "../components/Pomodoro";
import Header from "../components/Header";

import Quotes from "../components/Quotes";

import TodoInput from "../components/TodoInput";
import TodoList from "../components/TodoList";

import TotalFocusTime from "../features/totalFocusTime/TotalFocusTime";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import { maxWidth } from "../global";

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
    height: 97vh;

  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

const InsideWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: ${maxWidth}px) {
    flex-direction: column;
  }
`;

const TodoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 33%;
`;

const Home = () => {
  const [isClock, setIsClock] = useState(true);

  return (
    <div>
      <GlobalStyle />
      <Wrapper>
        <Header />
        <Clock isHidden={!isClock} setIsClock={setIsClock} />
        <Pomodoro isHidden={isClock} setIsClock={setIsClock} />
        <Greetings />
        <InsideWrapper>
          <div style={{ width: "33%" }}></div>

          <TodoWrapper>
            <TodoInput />
            <TodoList />
          </TodoWrapper>

          <div
            style={{ width: "33%", display: "flex", justifyContent: "center" }}
          >
            <TotalFocusTime />
          </div>
        </InsideWrapper>
        <Quotes />
      </Wrapper>
    </div>
  );
};

export default Home;
