export const TOGGLE_EDITING = "TOGGLE_EDITNG";
export const END_ITEM_UPDATE = "END_ITEM_UPDATE";
export const TOGGLE_DONE = "TOGGLE_DONE";
export const ADD_TODO = "ADD_TODO";
export const CLEAR_DONE = "CLEAR_DONE";

export const initialTodoState = {
  editing: false,
  done: false,
  id: Date.now(),
  todo: "Hello World",
  list: [],
};


export function itemReducer(state, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        list: [...state.list, action.payload]
      }
    case TOGGLE_EDITING:
      return {
        ...state,
        editing: !state.editing,
      };
    case TOGGLE_DONE:
      return {
        ...state,
        done: !state.done,
      };
    case END_ITEM_UPDATE:
      return {
        ...state,
        todo: action.payload ? action.payload : state.todo,
        editing: false,
      };
    default:
      return state;
  }
}
