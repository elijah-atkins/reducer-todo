import React from "react";

const Item = props => {
  const handleClick = e => {
    props.toggleItemDone(props.item.id);
  };
  return (
    <div
      onClick={handleClick}
      className={`item${props.item.done ? " done" : ""}`}
    >
      <p>{props.item.name}</p>
    </div>
  );
};

export default Item;