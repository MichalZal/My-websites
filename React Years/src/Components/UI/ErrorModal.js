import React from "react";
import Card from "./Card";
import Button from "./Button.js";
import classes from './ErrorModal.module.css'

const ErrorModal = props => {
	const handleDelete = e => {
    console.log('delete')
  }
  
  return (
    <div>
      <div className={classes.backdrop} onCLick={props.onConfirm}></div>
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={handleDelete}>ok</Button>
        </footer>
      </Card>
    </div>
	);
};

export default ErrorModal;
