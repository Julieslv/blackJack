import React, { useContext } from 'react';
import styled from 'styled-components';
const Button = ({ text, action }) => {
  return <ButtonEl onClick={action}>{text}</ButtonEl>;
};

const ButtonEl = styled.button`
  background: transparent none;
  border: 1px solid #000000;
  color: #000000;
  padding: 0.5rem;
`;
export default Button;
