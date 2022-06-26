import React from "react";
import styled from "styled-components";
import Button from '../UI/Button'


const SidebarContainer = styled.aside`
  width: 100%;
  max-width: 300px;
  background-color: white;
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
`;

const SidebarHeader = styled.div`
  text-align: center;
  font-size: 1.2em;
`;

const UnorderedList = styled.ul`
  list-style-type: none;
  text-align: left;
  padding-left: 0;
  padding: 1.3rem;
  font-weight: bold;
`

const ListItem = styled.li`
  font-size: 1.2em;
  padding: .5rem;
  border-bottom: 1px solid grey;
  margin-left: 0;
  padding-left: 0;
  display: flex;
  justify-content: space-between;
`

const SideBar = (props) => {
  const tasks = props.items.map(task => 
  <ListItem key={task.id}>
    <div>{task.text}</div>
    <Button onClick={props.onDelete}>X</Button>
  </ListItem>)
  
  return (
    <SidebarContainer>
      <SidebarHeader><h2>Delete</h2></SidebarHeader>
      <UnorderedList>
        {tasks}
      </UnorderedList>
    </SidebarContainer>
  );
};

export default SideBar;
