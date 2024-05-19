/**
 * 초를 넣으면 시간, 분, 초 변환하는 함수
 * @param {number} seconds
 * @returns {{hours: number, minutes: number, seconds: number}}
 */
export const convertSeconds = (seconds) => {
  const hours = Math.floor(seconds / 3600);
  seconds %= 3600;
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  return {
    hours: hours,
    minutes: minutes,
    seconds: remainingSeconds,
  };
};
