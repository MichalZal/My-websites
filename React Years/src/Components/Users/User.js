import React from "react";
import styled from 'styled-components'
import classes from './User.module.css'

const Button = styled.button`

  color: white;
  font-size: 1em;
  background-color: #4f005f;
  border-radius: 6px;
  padding: 0rem .3rem;


  &:hover {
  background-color: #2c003c;
  cursor: pointer;
}

`;

const User = (props) => {
	const handleDelete = e => {
    props.onDelete(props.id)
  }
  
  return (
		<div className={classes.user}>
			{" "}
      <div>
        {props.name} ({props.age}) years old.
      </div>
      <Button onClick={handleDelete}>x</Button>
		</div>
	);
};

export default User;
