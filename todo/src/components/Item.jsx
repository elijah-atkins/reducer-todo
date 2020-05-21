import React, { useReducer, useState } from "react";
import { itemReducer, initialTodo, TOGGLE_EDITING, TOGGLE_DONE } from "../reducers";
const Item = ({ item }) => {

  const initialTodo = {
    todo: item.todo,
    editing: false,
    id:  item.id,
    done: false,
  };
  const [todoState, dispatch] = useReducer(itemReducer, initialTodo);
  const [newTitleText, editTodoText] = useState(initialTodo.todo);
  const handleClick = e => {
   dispatch({ type: TOGGLE_DONE });
  };
  return (
    <div
      onClick={handleClick}
      className={`item${todoState.done ? " done" : ""}`}
    >
      <p>{todoState.todo}</p>
    </div>
  );
};

export default Item;