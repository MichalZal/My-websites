import React from "react";
import classes from "./UserList.module.css";
import Card from '../UI/Card'
// import Button from "../UI/Button";
import styled from 'styled-components'

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



const UserList = props => {
  const handleDelete = e => {
    console.log("delete")
  }

	return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.key} id={user.id}>
            <div className="">{user.name} ({user.age}) years old.</div>
            <Button onClick={handleDelete} >x</Button>
          </li>
        ))}
      </ul>
    </Card>
	);
};

export default UserList;
