import React, { useState } from "react";
import "./scss/index.scss";
import AddItemForm from './components/AddItemForm'
import TodoList from "./components/TodoList";
import data from './data/data';

function App() {
    const [items, setItems] = useState(data)

    const clearDone = () => {
        // console.log("ea: index.js: clearDone");
         setItems({
           items: [
             items.filter(item => {
               return !item.done;
             })
           ]
         });
       };
       const addItem = item => {
        const newItem = {
          name: item,
          id: Date.now(),
          done: false,
          editing: false
        };
        setItems({ items: [...items, newItem] });
      };
  return (
    <div className="App">
        <header className="header">
            <h2>Todo List</h2>
            <AddItemForm addItem={addItem} />
        </header>
        <body className="body">
        <TodoList
       //   toggleItemDone={this.toggleItemDone}
          items={items}
          clearDone={clearDone}
        />
        </body>
    </div>
  );
}

export default App;
