import React, { useRef } from 'react'

const NewTodo: React.FC<{ onSubmit: (text: string) => void}> = (props) => {
  const textInputRef  = useRef<HTMLInputElement>(null)
  
  const submissionHandler = (e: React.FormEvent) => {
    e.preventDefault()
    
    const enteredText = textInputRef.current!.value;

    if (enteredText?.trim().length === 0) {
      console.log('siema')
    }

    props.onSubmit(enteredText)
  }
  
  return (
    <form onSubmit={submissionHandler}>
      <label htmlFor="text">Todo Text</label>
      <input ref={textInputRef} type="text" id='text'/>

      <button>Add Todo</button>
    </form>
  )
}

export default NewTodo