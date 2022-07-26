import React, { useContext} from "react";
import classes from "./Todos.module.css";
import { TodosContext} from '../store/todos-context'

import TodoItem from "./TodoItem";

const Todos: React.FC = () => {
	const todosCtx = useContext(TodosContext)
	
	return (
		<ul className={classes.todos}>
			{todosCtx.items.map((item) => (
				<TodoItem
					onDelete={todosCtx.removeTodo.bind(null, item.id)}
					key={item.id}
					text={item.text}
				/>
			))}
		</ul>
	);
};

export default Todos;
