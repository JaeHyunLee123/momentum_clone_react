import styled from "styled-components";

const Btn = styled.button`
  font-size: 0.9rem;
  padding: 5px 10px;
  margin: 0px 5px;

  color: white;
  font-size: 20px;

  padding: 10px 20px;
  border: none;
  border-radius: 15px;
  background: black;
  box-shadow: 0px 0px 20px tomato;

  transition: all 200ms ease-in-out;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

/**
 *
 * @param {Object} props
 * @param props.children children components
 * @param {Function} props.onClick
 */
const ClockBtn = ({ children, onClick }) => {
  return <Btn onClick={onClick}>{children}</Btn>;
};

export default ClockBtn;
