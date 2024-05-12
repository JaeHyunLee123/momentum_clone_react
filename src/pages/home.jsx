import Clock from "../components/Clock";
import Pomodoro from "../components/Pomodoro";

const Home = () => {
  return (
    <div>
      This is home
      <Clock isHidden={true} />
      <Pomodoro isHidden={false} />
    </div>
  );
};

export default Home;
