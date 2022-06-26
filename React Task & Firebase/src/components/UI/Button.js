import React from "react";
import styled from "styled-components";

const ButtonDiv = styled.button`
  padding: 0 10px 0 10px;
  background-color: red;
  border: 1px solid black;
  border-radius: 10px;
  font-size: .7rem;

  &:hover {
    background-color: orange;
  }
`;

const Button = (props) => {
  return <ButtonDiv>{props.children}</ButtonDiv>;
};

export default Button;
