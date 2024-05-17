import styled from "styled-components";
import useInterval from "../hooks/useInterval";
import { useEffect, useState } from "react";
import ClockBtn from "./ClockBtn";

const FOCUS_TIME = 25 * 60;
const REST_TIME = 5 * 60;

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
 *
 * @param {Object} props
 * @param {boolean} props.isHidden
 * @param {Function} props.setIsClock
 */
const Pomodoro = ({ isHidden, setIsClock }) => {
  const [remainTime, setRemainTime] = useState(FOCUS_TIME);
  const [isPause, setIsPause] = useState(true);
  const [isFocus, setIsFocus] = useState(true);
  const [startInterval, pauseInterval] = useInterval(() => {
    setRemainTime((prev) => prev - 1);
  });

  useEffect(() => {
    if (remainTime < 0) {
      if (isFocus) {
        setRemainTime(REST_TIME);
        setIsFocus(false);
      } else {
        setRemainTime(FOCUS_TIME);
        setIsFocus(true);
      }
    }
  }, [isFocus, remainTime]);

  const handleStart = () => {
    startInterval();
    setIsPause(false);
  };

  const handlePause = () => {
    pauseInterval();
    setIsPause(true);
  };

  const handleReset = () => {
    pauseInterval();
    setIsPause(true);
    setRemainTime(FOCUS_TIME);
  };

  const minute = String(Math.floor(remainTime / 60)).padStart(2, "0");
  const second = String(Math.floor(remainTime % 60)).padStart(2, "0");

  return (
    <Wrapper hidden={isHidden}>
      <Time>{`${minute}:${second}`}</Time>
      <BtnWrapper>
        <ClockBtn
          onClick={() => {
            setIsClock(true);
          }}
        >
          <span>Turn to clock</span>
        </ClockBtn>
        {isPause ? (
          <ClockBtn onClick={handleStart}>
            <i className="fa-solid fa-play"></i>
          </ClockBtn>
        ) : (
          <ClockBtn onClick={handlePause}>
            <i className="fa-solid fa-pause"></i>
          </ClockBtn>
        )}
        <ClockBtn onClick={handleReset}>
          <i className="fa-solid fa-repeat"></i>
        </ClockBtn>
      </BtnWrapper>
    </Wrapper>
  );
};

export default Pomodoro;
