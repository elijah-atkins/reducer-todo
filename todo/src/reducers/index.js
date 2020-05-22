import {
  TOGGLE_DONE,
  TOGGLE_EDITING,
  END_ITEM_UPDATE,
  ADD_TODO,
  CLEAR_DONE
} from '../actions'
export const initialTodoState = {
  editing: false,
  done: false,
  id: Date.now(),
  todo: "Hello World",
  list: [],
};


export function todoReducer(state, action) {
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
