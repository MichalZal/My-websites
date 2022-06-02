import React, { useState } from "react";
import AddUser from "./Components/Users/AddUser";
import UserList from "./Components/Users/UserList";
import classes from "./app.module.css";
import Card from "./Components/UI/Card";

function App() {
  const [usersList, setUsersList] = useState([]);

  const AddUserHandler = (uName, uAge) => {
    setUsersList((prev) => {
	return [
	  ...prev,
	  {
	    name: uName,
	    age: uAge,
	    key: Math.random().toString(),
	    id: Math.random().toString(),
	  },
	];
       });
      };

  const handleItemDelete = (userId) => {
    setUsersList((prev) => {
    const filteredUsers = prev.filter((user) => user.id !== userId);
      return filteredUsers;
	});
	
        };
  
  return (
    <div>
	<AddUser onAddUser={AddUserHandler} />
	{usersList < 1 ? (
        <div className={classes.notFound}>
          No users 
        </div>
	) : (
        <UserList
	  users={usersList}
	  onDelete={handleItemDelete}
	  id={usersList.id}
	/>
  )}
</div>
);
}

export default App;
