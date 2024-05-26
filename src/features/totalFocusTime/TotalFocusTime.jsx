import { useSelector } from "react-redux";
import { convertSeconds } from "../../libs/utils";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 300px;
  height: 150px;

  background-color: black;
  opacity: 0.6;
  border-radius: 20px;

  margin: 10px 20px 10px 20px;

  span {
    font-size: 1.5rem;
    text-align: center;
    margin: 5px;
  }

  span: nth-child(2) {
    font-size: 2rem;
  }
`;

const TotalFocusTime = () => {
  const focusTime = useSelector((state) => state.totalFocusTime.value);

  const { hours, minutes, seconds } = convertSeconds(focusTime);

  return (
    <Wrapper>
      <span>Today's focused time</span>
      <span>{`${String(hours).padStart(2, "0")}:${String(minutes).padStart(
        2,
        "0"
      )}:${String(seconds).padStart(2, "0")}`}</span>
    </Wrapper>
  );
};

export default TotalFocusTime;
