import { legacy_createStore } from 'redux'

const initialState = {
  counter: 0,
  showCounter: true
}

const counterReducer = (state =  initialState , action) => {
  if (action.type === 'increment') {
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter
    }
  }

  if (action.type === 'incrementMore') {
    return {
      counter: state.counter + action?.amount,
      showCounter: state.showCounter
    }
  }

  if (action.type === 'decrement') {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter
    }
  }

  if (action.type === 'toggleCounter') {
    return {
      counter: state.counter,
      showCounter: !state.showCounter
    }
  }

  return state
};

const store = legacy_createStore(counterReducer)

export default store;

// subskrybowanie state. TO zwykle sie robi w komponentach
// const subscriber = () => {
//   const latestState = store.getState()
//   console.log(latestState)
// }

// store.subscribe(subscriber)

// store.dispatch({ type: 'increment'})