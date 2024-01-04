import React from "react";
import classes from "./Card.module.css"

const Card = (props: { text: string; onRemoveTodo: (event: React.MouseEvent) => void }) => {
  return (
    <div className={classes.item} onClick={props.onRemoveTodo}>
      <li>{props.text}</li>
    </div>
  );
};

export default Card;
