import { useSelector } from "react-redux";
import { convertSeconds } from "../../libs/utils";

const TotalFocusTime = () => {
  const focusTime = useSelector((state) => state.totalFocusTime.value);

  const { hours, minutes, seconds } = convertSeconds(focusTime);

  return (
    <div>
      <span> </span>
      <span>{`Today's focused time: ${focusTime}`}</span>
    </div>
  );
};

export default TotalFocusTime;
