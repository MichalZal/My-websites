import React, { useRef, useContext } from 'react'
import classes from './NewTodo.module.css';
import { TodosContext } from '../store/todos-context'

const NewTodo: React.FC = (props) => {
  const textInputRef  = useRef<HTMLInputElement>(null)
  const todoCtx = useContext(TodosContext)

  const submissionHandler = (e: React.FormEvent) => {
    e.preventDefault()
    
    const enteredText = textInputRef.current!.value;

    if (enteredText?.trim().length === 0) {
      console.log('siema')
      return
    }

    todoCtx.addTodo(enteredText)
  }
  
  return (
    <form className={classes.form} onSubmit={submissionHandler}>
      <label htmlFor="text">Todo Text</label>
      <input ref={textInputRef} type="text" id='text'/>

      <button>Add Todo</button>
    </form>
  )
}

export default NewTodo