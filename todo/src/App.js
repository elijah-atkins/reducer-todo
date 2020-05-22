import React, { useState, useReducer } from "react";
import "./scss/index.scss";
import AddItemForm from "./components/AddItemForm";
import TodoList from "./components/TodoList";
import data from "./data/data";
import { useForm } from "./hooks/useForm";
import { todoReducer, ADD_TODO } from "./reducers";

function App() {
  const thisList = {
    list: [...data],
  };
  const [todoState, dispatch] = useReducer(todoReducer, thisList);
  const [items, setItems] = useState(data);

  const clearDone = () => {
    setItems({
      items: [
        items.filter((item) => {
          return !item.done;
        }),
      ],
    });
  };
  const addTodo = (item) => {
    const newItem = {
      todo: item,
      id: Date.now(),
      done: false,
      editing: false,
    };
    dispatch({ type: ADD_TODO, payload: newItem });

  };
  const [values] = useForm(
    [
      {
        todo: "",
        id: "",
        done: false,
        editing: false,
      },
    ],
    "todo-list",
    () => {
      setItems(values);
    }
  );

  return (
    <div className="App">
      <header className="header">
        <h2>Todo List</h2>
        <AddItemForm addTodo={addTodo} />
      </header>
      <div className="body">
        <TodoList items={todoState.list} clearDone={clearDone} />
      </div>
    </div>
  );
}

export default App;
