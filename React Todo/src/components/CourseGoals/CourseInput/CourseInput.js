import React, { useState } from 'react';
// import styled from 'styled-components'
import styles from './CourseInput.module.css'
import Button from '../../UI/Button/Button';

// const FormControl = styled.div`
//   margin: 0.5rem 0;

//   & label {
//     font-weight: bold;
//     display: block;
//     margin-bottom: 0.5rem;
//     color: ${props => props.invalid ? 'red' : 'black'};
//   }

//   & input {
//     display: block;
//     width: 100%;
//     border: 1px solid ${props => (props.invalid ? 'red' : '#ccc')};
//     background-color: ${props => (props.invalid ? '#ffd7d7' : 'transparent')};
//     font: inherit;
//     line-height: 1.5rem;
//     border-radius: 8px;
//     padding: .4rem .4rem .3rem .4rem;
//   }

//   & input:focus {
//     outline: none;
//     background: #efefef;
//     border-color: #aaa;
//   }

// `;

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true)
  // state is true

  const goalInputChangeHandler = event => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true)
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      // jeśli długośc inputa jest = 0 to state jest false
      // i zatrzymujemy wykonnaie funkcji.
      return;
    }
    setIsValid(true);
    props.onAddGoal(enteredValue);
    setEnteredValue('')
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`${styles['form-control']} ${!isValid && styles.invalid}`}>
        <label>Course Goal</label>
        <input 
          type="text" 
          onChange={goalInputChangeHandler}
          value={enteredValue}
        />
        <Button type="submit">Add Goal</Button>
      </div>
    </form>
  );
};

export default CourseInput;
