import styled from "styled-components";
import useInterval from "../hooks/useInterval";
import { useEffect, useState } from "react";
import ClockBtn from "./ClockBtn";
import useSound from "use-sound";
import beepsound from "../assets/sound/beep-sound.mp3";
import { useDispatch } from "react-redux";
import { increment } from "../features/totalFocusTime/totalFocusTimeSlice";
import { maxWidth } from "../global";

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
  @media screen and (max-width: ${maxWidth}px) {
    font-size: 5rem;
  }
`;

/**
 *
 * @param {Object} props
 * @param {boolean} props.isHidden
 * @param {Function} props.setIsClock
 */
const Pomodoro = ({ isHidden, setIsClock }) => {
  const [playbeep] = useSound(beepsound);

  const [remainTime, setRemainTime] = useState(FOCUS_TIME);
  const [isPause, setIsPause] = useState(true);
  const [isFocus, setIsFocus] = useState(true);

  const dispatch = useDispatch();

  const [startPomodoroInterval, pausePomodoroInterval] = useInterval(() => {
    setRemainTime((prev) => prev - 1);
    if (isFocus) {
      dispatch(increment());
    }
  });

  useEffect(() => {
    if (remainTime < 4) {
      playbeep();
    }

    if (remainTime < 0) {
      if (isFocus) {
        setRemainTime(REST_TIME);
        setIsFocus(false);
      } else {
        setRemainTime(FOCUS_TIME);
        setIsFocus(true);
      }
    }
  }, [isFocus, playbeep, remainTime]);

  const handleStart = () => {
    startPomodoroInterval();
    setIsPause(false);
  };

  const handlePause = () => {
    pausePomodoroInterval();
    setIsPause(true);
  };

  const handleReset = () => {
    pausePomodoroInterval();
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
