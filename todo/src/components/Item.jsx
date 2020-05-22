import React, { useReducer, useState } from "react";

import { connect } from "react-redux";
import { toggleEditing, toggleDone, endItemUpdate } from '../actions';

//import { todoReducer, TOGGLE_EDITING, TOGGLE_DONE, END_ITEM_UPDATE } from "../reducers";

const Item = ({ item }) => {
  const thisTodo = {
    todo: item.todo,
    editing: false,
    id: item.id,
    done: false,
  };
  //const [todoState, dispatch] = useReducer(todoReducer, thisTodo);
  const [newTodoText, editTodoText] = useState(thisTodo.todo);
  const handleDoubleClick = (e) => {
  //  dispatch({ type: TOGGLE_EDITING });
  };
  const handleClick = (e) => {
  //  dispatch({ type: TOGGLE_DONE });
  };
  const handleChanges = e => {
    editTodoText(e.target.value);
  };
  return (
    <div
      onClick={handleClick}
      onDoubleClick={handleDoubleClick}
      className={`item${this.state.done ? " done" : ""}`}
    >
      {!this.state.editing ? (
        <p>{this.state.todo}</p>
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
             // dispatch({ type: END_ITEM_UPDATE, payload: newTodoText });
            }}
          >
            Update
          </button>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    // whatWillBeSentToProps: state.stateVariableWeWantForThisApp
    editing: state.editing,
    todo: state.todo,
    done: state.done
  };
};

// const hoc = connect(mapStateToProps, {});
// const EnhancedTitleComponent = hoc(Title);
// export default EnhancedTitleComponent;
export default connect(
  mapStateToProps,
  { toggleEditing, toggleDone, endItemUpdate } //toggleEditing: toggleEditing }
)(Item);
