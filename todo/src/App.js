import React, { useState } from "react";
import "./scss/index.scss";
import AddItemForm from "./components/AddItemForm";
import TodoList from "./components/TodoList";
import data from "./data/data";
import { useForm } from "./hooks/useForm";

function App() {
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
  const addItem = (item) => {
    const newItem = {
      todo: item,
      id: Date.now(),
      done: false,
      editing: false,
    };
    setItems({ items: [...items, newItem] });
  };
  const [values, handleChanges, clearForm, handleSubmit] = useForm(
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
        <AddItemForm addItem={addItem} />
      </header>
      <div className="body">
        <TodoList items={items} clearDone={clearDone} />
      </div>
    </div>
  );
}

export default App;
