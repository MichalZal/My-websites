import React from 'react';

import CourseGoalItem from '../CourseGoalItem/CourseGoalItem';
// import './CourseGoalList.css';
import styled from 'styled-components'

const GoalList = styled.div`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const CourseGoalList = props => {
  return (
    <GoalList>
      {props.items.map(goal => (
        <CourseGoalItem
          key={goal.id}
          id={goal.id}
          onDelete={props.onDeleteItem}
        >
          {goal.text}
        </CourseGoalItem>
      ))}
    </GoalList>
  );
};

export default CourseGoalList;
