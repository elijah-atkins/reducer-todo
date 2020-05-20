import React from "react";
import ReactDOM from "react-dom";
import AddItemForm from './components/AddItemForm'
import TodoList from "./components/TodoList";
import './scss/index.scss';


const items = [
  {
    name: "Bananas",
    id: 123,
    Done: false
  },
  {
    name: "Tortillas",
    id: 124,
    Done: false
  },
  {
    name: "Milk",
    id: 1235,
    Done: false
  },
  {
    name: "Pizza Sauce",
    id: 1246,
    Done: false
  },
  {
    name: "Raw Honey",
    id: 1237,
    Done: false
  },
  {
    name: "Granola",
    id: 1248,
    Done: false
  }
];

class App extends React.Component {
  // Constructor with state
  constructor() {
    super();
    this.state = {
      items,
      otherData: ""
    };
  }

  // Class methods to update state
  toggleItemDone = itemId => {
   // console.log("ea: index.js: App: toggleItemDone: itemId: ", itemId);
    this.setState({
      items: this.state.items.map(item => {
        if (itemId === item.id) {
          return {
            ...item,
            Done: !item.Done
          };
        }
        return item;
      })
    });
  };

  addItem = item => {
    const newItem = {
      name: item,
      id: Date.now(),
      Done: false
    };
    this.setState({ items: [...this.state.items, newItem] });
  };

  clearDone = () => {
   // console.log("ea: index.js: clearDone");
    this.setState({
      items: [
        ...this.state.items.filter(item => {
          return !item.Done;
        })
      ]
    });
  };

  render() {
    return (
      <div className="App">
        <div className="header">
          <h2>Todo List</h2>
          <AddItemForm addItem={this.addItem} />
        </div>
        <TodoList
          toggleItemDone={this.toggleItemDone}
          items={this.state.items}
          clearDone={this.clearDone}
        />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
