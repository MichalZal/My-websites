import React from 'react'

const TodoItem: React.FC<{key: string, text: string}> = (props) => {
  return (
    <li key={props.key}>
      <p>{props.text}</p>
    </li>
  )
}

export default TodoItem