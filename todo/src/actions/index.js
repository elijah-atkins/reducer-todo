export const TOGGLE_EDITING = "TOGGLE_EDITNG";
export const END_ITEM_UPDATE = "END_ITEM_UPDATE";
export const TOGGLE_DONE = "TOGGLE_DONE";
export const ADD_TODO = "ADD_TODO";
export const CLEAR_DONE = "CLEAR_DONE";

export const toggleEditing = () => {
    return {
      type: TOGGLE_EDITING
    };
  };
  
  export const endItemUpdate = newTitle => {
    return {
      type: END_ITEM_UPDATE,
      payload: newTitle
    };
  };

  export const toggleDone = () => {
    return {
      type: TOGGLE_DONE
    };
  };

  export const addTodo = newTodo => {
    return {
      type: ADD_TODO,
      payload: newTodo
    };
  };

  export const clearDone = () => {
    return {
      type: CLEAR_DONE
    };
  };