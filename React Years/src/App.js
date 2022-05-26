import React, {useState} from 'react';
import AddUser from './Components/Users/AddUser'
import UserList from './Components/Users/UserList';

function App() {
  const [usersList, setUsersList] = useState([])

  const AddUserHandler = (uName, uAge) => {
    setUsersList((prev) => {
      return [...prev, {
        name: uName,
        age: uAge, 
        key: Math.random().toString(),
        id: Math.random().toString()
      }];
    })
  }

  // const handleItemDelete = userId => {
  //   setUsersList(prev => {
  //     const filteredUsers = prev.filter(user => user.id !== userId);
  //     return filteredUsers
  //   })
  // }

  return (
    <div>
      <AddUser onAddUser={AddUserHandler}/>
      <UserList 
        users={usersList} 
        // onDelete={handleItemDelete}
        id={usersList.id}
      />
    </div>
  );
}

export default App;
