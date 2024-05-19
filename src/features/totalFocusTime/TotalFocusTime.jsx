import { useSelector } from "react-redux";

const TotalFocusTime = () => {
  const focusTime = useSelector((state) => state.totalFocusTime.value);

  return (
    <div>
      <span>Today's focused time</span>
      <span>{focusTime}</span>
    </div>
  );
};

export default TotalFocusTime;
