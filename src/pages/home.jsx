import { useState } from "react";
import Clock from "../components/Clock";
import Pomodoro from "../components/Pomodoro";
import Header from "../components/Header";

const Home = () => {
  const [isClock, setIsClock] = useState(true);

  return (
    <div>
      <Header />
      <Clock isHidden={!isClock} setIsClock={setIsClock} />
      <Pomodoro isHidden={isClock} setIsClock={setIsClock} />
    </div>
  );
};

export default Home;
