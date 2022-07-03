import { useSelector, useDispatch } from 'react-redux'

import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch()
  const counter = useSelector(state => state.counter)
  const show = useSelector(state => state.showCounter)

  const toggleCounterHandler = () => {
    dispatch({type: 'toggleCounter'})
  };

  const incrementHandler = () => {
    dispatch({type: 'increment'})
  }

  const incrementHandlerMore = () => {
    dispatch({type: 'incrementMore', amount: 5})
  }

  const decrementHandler = () => {
    dispatch({type: 'decrement', value: 5})
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>increment</button>
        <button onClick={incrementHandlerMore}>increase by 5</button>
        <button onClick={decrementHandler}>decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
