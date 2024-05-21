import { useState } from "react";
import styled from "styled-components";
import ClockBtn from "./ClockBtn";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  display: ${(props) => (props.hidden ? "none" : "block")};
`;

const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Time = styled.h1`
  margin-top: 50px;
  margin-bottom: 30px;
  text-align: center;
  font-size: 8rem;
`;

/**
 * @param {Object} props
 * @param {boolean} props.isHidden
 * @param {Function} props.setIsClock
 */
const Clock = ({ isHidden, setIsClock }) => {
  const [date, setDate] = useState(new Date());

  setInterval(() => {
    const newDate = new Date();
    setDate(newDate);
  }, 1000);

  return (
    <Wrapper hidden={isHidden}>
      <Time>{`${String(date.getHours()).padStart(2, "0")}:${String(
        date.getMinutes()
      ).padStart(2, "0")}:${String(date.getSeconds()).padStart(2, "0")}`}</Time>
      <BtnWrapper>
        <ClockBtn
          onClick={() => {
            setIsClock(false);
          }}
        >
          <span>Start pomodoro</span>
        </ClockBtn>
      </BtnWrapper>
    </Wrapper>
  );
};

export default Clock;
