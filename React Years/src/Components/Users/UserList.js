import React from "react";
import classes from "./UserList.module.css";
import Card from '../UI/Card'
// import Button from "../UI/Button";
import User from './User'


const UserList = props => {
  const handleDelete = id => {
    props.onDelete(id)
  }

return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.key}>
            <User 
              name={user.name}
              age={user.age}
              onDelete={handleDelete}
              id={user.id}
              >
            </User>
          </li>
        ))}
      </ul>
    </Card>
	);
};

export default UserList;
