import React from 'react';
// import './CourseGoalItem.css';
import styled from 'styled-components'

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem 0;
  background: #8b005d;
  box-shadow: 0 2px 8px rgba(200, 1, 0, 0.7);
  color: white;
  padding: 1.3rem 1.5rem;
  border-radius: 12px;
`;

const Button = styled.div`
  color: white;
  font-size: 1em;
  padding: .3rem .3rem .2rem .3rem;
  border-radius: 12px;
  background-color: rgba(255,0,0,1);

  &:hover {
    background-color: rgba(255,0,0,.5);
    cursor: pointer;
  }
`;


const CourseGoalItem = props => {
  // const [deleteText, setDeleteText] = useState('');

  const deleteHandler = () => {
    // setDeleteText('(Deleted!)');
    props.onDelete(props.id);
  };

  return (
    <Item >
      {props.children}
      <Button onClick={deleteHandler}>X</Button>
    </Item>
  );
};

export default CourseGoalItem;
