import { useState } from "react";

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
      <h1>{`${String(date.getHours()).padStart(2, "0")}:${String(
        date.getMinutes()
      ).padStart(2, "0")}:${String(date.getSeconds()).padStart(2, "0")}`}</h1>
    </div>
  );
};

export default Clock;
