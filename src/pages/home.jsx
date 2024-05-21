import Clock from "../components/Clock";
import Greetings from "../components/Greetings";

const Home = () => {
  return (
    <div>
      <Clock isHidden={false} />
      <Greetings />
    </div>
  );
};

export default Home;
