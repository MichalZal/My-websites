import React from "react";

import styled from "styled-components";
const CardStyle = styled.div`
	border-radius: 8px;
  background-color:white;
  box-shadow: 0 2px 8px rgba(0,0,0,0.26);
`;

const Card = (props) => {
	return (
    <CardStyle className={`${props.className}`}>{props.children}</CardStyle>
  )
};

export default Card;
