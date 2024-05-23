import { useState } from "react";
import Clock from "../components/Clock";
import Greetings from "../components/Greetings";
import Pomodoro from "../components/Pomodoro";
import Header from "../components/Header";
import Quotes from "../components/Quotes";
import TotalFocusTime from "../features/totalFocusTime/TotalFocusTime";

const Home = () => {
  const [isClock, setIsClock] = useState(true);

  return (
    <div>
      <Header />
      <Clock isHidden={!isClock} setIsClock={setIsClock} />
      <Pomodoro isHidden={isClock} setIsClock={setIsClock} />
      <Greetings />
      <TotalFocusTime />
      <Quotes />
    </div>
  );
};

export default Home;
