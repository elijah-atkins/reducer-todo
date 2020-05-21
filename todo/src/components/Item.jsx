import React, { useReducer, useState } from "react";
import { itemReducer, TOGGLE_EDITING, TOGGLE_DONE, END_ITEM_UPDATE } from "../reducers";
const Item = ({ item }) => {
  const thisTodo = {
    todo: item.todo,
    editing: false,
    id: item.id,
    done: false,
  };
  const [todoState, dispatch] = useReducer(itemReducer, thisTodo);
  const [newTodoText, editTodoText] = useState(thisTodo.todo);
  const handleDoubleClick = (e) => {
    dispatch({ type: TOGGLE_EDITING });
  };
  const handleClick = (e) => {
    dispatch({ type: TOGGLE_DONE });
  };
  const handleChanges = e => {
    editTodoText(e.target.value);
  };
  return (
    <div
      onClick={handleClick}
      onDoubleClick={handleDoubleClick}
      className={`item${todoState.done ? " done" : ""}`}
    >
      {!todoState.editing ? (
        <p>{todoState.todo}</p>
      ) : (
        <div>
          <input
            className="todo-input"
            type="text"
            name="newTodoText"
            value={newTodoText}
            onChange={handleChanges}
          />
          <button
            onClick={() => {
              dispatch({ type: END_ITEM_UPDATE, payload: newTodoText });
            }}
          >
            Update
          </button>
        </div>
      )}
    </div>
  );
};

export default Item;
