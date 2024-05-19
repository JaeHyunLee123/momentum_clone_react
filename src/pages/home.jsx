import { useState } from "react";
import Clock from "../components/Clock";
import Pomodoro from "../components/Pomodoro";
import Header from "../components/Header";
import TotalFocusTime from "../features/totalFocusTime/TotalFocusTime";

const Home = () => {
  const [isClock, setIsClock] = useState(true);

  return (
    <div>
      <Header />
      <Clock isHidden={!isClock} setIsClock={setIsClock} />
      <Pomodoro isHidden={isClock} setIsClock={setIsClock} />
      <TotalFocusTime />
    </div>
  );
};

export default Home;
