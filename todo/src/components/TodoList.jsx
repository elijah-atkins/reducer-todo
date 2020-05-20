import React from "react";
import Item from "./Item";

const TodoList = props => {
  return (
    <div className="todo-list">
      {props.items.map(item => (
        <Item
          toggleItemDone={props.toggleItemDone}
          key={item.id}
          item={item}
        />
      ))}
      <button className="clear-btn" onClick={props.clearDone}>
        Clear Done
      </button>
    </div>
  );
};

export default TodoList;