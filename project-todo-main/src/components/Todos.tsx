import React from "react";
import Todo from "../assets/types/todo";
import Card from "./Card";
import classes from "./Todos.module.css";

const Todos = (props: {
  items: Todo[];
  onRemoveTodo: (id:string) => void;
}) => {
  return (
    <ul className={classes.todos}>
      {props.items.map((item) => (
        <Card
          key={item.id}
          text={item.text}
          onRemoveTodo={props.onRemoveTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
