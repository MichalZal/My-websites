import React, { useState } from 'react'
import Todo from '../models/todo'

type TodosContextObject = {
  items: Todo[],
  addTodo: (text: string) => void,
  removeTodo: (id: string) => void
}

export const TodosContext = React.createContext<TodosContextObject>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});

const ContextProvider: React.FC<{children: React.ReactNode}> = (props) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const submissionHandler = (text: string) => {
	const newTodo = new Todo(text);

	setTodos((prev) => {
		return prev.concat(newTodo);
	});
  };

  const deleteHandler = (id: string) => {
	setTodos((prev) => {
		return prev.filter((todo) => todo.id !== id);
	});
  };

  const contextValue: TodosContextObject = {
    items: todos,
    addTodo: submissionHandler,
    removeTodo: deleteHandler
  };
  
  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  )
}

export default ContextProvider;
