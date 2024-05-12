/**
 * @param {Object} props
 * @param {boolean} props.isHidden
 */
const Clock = ({ isHidden }) => {
  return <div hidden={isHidden}></div>;
};

export default Clock;
