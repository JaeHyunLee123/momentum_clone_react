import { useState, useEffect } from "react";

/**
 *  파라미터로 넘긴 콜백 함수를 일정 주기마다 실행시켜주는 훅
 * @param {Function} intervalCallback 주기마다 실행할 함수
 * @param {number} intervalTime 인터벌 간격(ms)
 * @returns {Function[]} startInterval() 실행 시 주기마다 콜백함수 실행, pauseInterval() 실행 시 주기 종료
 */
const useInterval = (intervalCallback, intervalTime = 1000) => {
  const [isActive, setIsActive] = useState(false);

  const startInterval = () => {
    if (!isActive) {
      setIsActive(true);
    }
  };

  const pauseInterval = () => {
    setIsActive(false);
  };

  useEffect(() => {
    let intervalId;
    if (isActive) {
      intervalId = setInterval(intervalCallback, intervalTime);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isActive, intervalCallback, intervalTime]);

  return [startInterval, pauseInterval];
};

export default useInterval;
