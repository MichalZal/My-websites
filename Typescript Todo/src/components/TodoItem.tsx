import React from "react";
import classes from "./TodoItem.module.css";

const TodoItem: React.FC<{
	key: string;
	text: string;
	onDelete: () => void;
}> = (props) => {
	return (
		<li onClick={props.onDelete} key={props.key} className={classes.item}>
			<p>{props.text}</p>
		</li>
	);
};

export default TodoItem;
