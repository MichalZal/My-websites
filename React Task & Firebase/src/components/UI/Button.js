import React from "react";
import styled from "styled-components";

const ButtonDiv = styled.button`
  padding: 0 10px 0 10px;
  background-color: #7a0144;
  border: 1px solid #7a0144;
  border-radius: 10px;
  font-size: .7rem;

  &:hover {
    background-color: #9c2377;
  }
`;

const Button = (props) => {
  return <ButtonDiv>{props.children}</ButtonDiv>;
};

export default Button;
