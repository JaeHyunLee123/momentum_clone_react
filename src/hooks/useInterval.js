/**
 *  파라미터로 넘긴 콜백 함수를 일정 주기마다 실행시켜주는 훅
 * @param {Function} intervalCallback 주기마다 실행할 함수
 * @param {number} intervalTime 인터벌 간격(ms)
 * @returns {Function[]} startInterval() 실행 시 주기마다 콜백함수 실행, pauseInterval() 실행 시 주기 종료
 */
const useInterval = (intervalCallback, intervalTime = 1000) => {
  let intervalId = null;

  /**
   * 주기마다 함수 실행
   */
  const startInterval = () => {
    intervalId = setInterval(intervalCallback, intervalTime);
  };

  /**
   * 주기 종료
   */
  const pauseInterval = () => {
    clearInterval(intervalId);
  };

  return [startInterval, pauseInterval];
};

export default useInterval;
