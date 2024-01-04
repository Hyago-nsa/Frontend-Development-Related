import React, { useRef } from "react";
import classes from "./TodoForm.module.css"

const TodoForm = (props: { onAddTodo: (text: string) => void }) => {
  const todoFromInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = todoFromInputRef.current!.value;

    if (enteredText?.trim().length === 0) {
      return;
    }

    props.onAddTodo(enteredText);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <label htmlFor="text">Text</label>
      <input id="text" type="text" ref={todoFromInputRef}></input>
      <button>Submit</button>
    </form>
  );
};

export default TodoForm;
