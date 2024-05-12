import styled from "styled-components";

const Btn = styled.button`
  font-size: 0.9rem;
  padding: 5px 10px;
  margin: 0px 5px;

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
const Button = ({ children, onClick }) => {
  return <Btn onClick={onClick}>{children}</Btn>;
};

export default Button;
