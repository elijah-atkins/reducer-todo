import React from "react";
import Item from "./Item";

const TodoList = ({ items, clearDone }) => {
  return (
    <div className="todo-table">
      <div className="todo-list">
        {items.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </div>
      <button className="clear-btn" onClick={clearDone}>
        Clear Done
      </button>
    </div>
  );
};

export default TodoList;
