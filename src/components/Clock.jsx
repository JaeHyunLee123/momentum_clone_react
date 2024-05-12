import { useState } from "react";
import styled from "styled-components";

const Time = styled.h1`
  margin-top: 50px;
  margin-bottom: 30px;
  text-align: center;
  font-size: 8rem;
`;

/**
 * @param {Object} props
 * @param {boolean} props.isHidden
 */
const Clock = ({ isHidden }) => {
  const [date, setDate] = useState(new Date());

  setInterval(() => {
    const newDate = new Date();
    setDate(newDate);
  }, 1000);

  return (
    <div hidden={isHidden}>
      <Time>{`${String(date.getHours()).padStart(2, "0")}:${String(
        date.getMinutes()
      ).padStart(2, "0")}:${String(date.getSeconds()).padStart(2, "0")}`}</Time>
    </div>
  );
};

export default Clock;
