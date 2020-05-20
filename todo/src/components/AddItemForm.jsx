import React, { useReducer } from 'react';
import { useForm } from "../hooks/useForm";

class AddItemForm extends React.Component {
  // Constructor with state
  constructor(props) {
    super(props);
    this.state = { newItemText: "" };
  }

  handleChanges = e => {
    // update state with each keystroke
    this.setState({ newItemText: e.target.value });
  };

  // class property to submit form
  handleSubmit = e => {
    e.preventDefault();
    if (this.state.newItemText) {
      this.props.addItem(this.state.newItemText);
      this.setState({ newItemText: "" });
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="item"
          value={this.state.newItemText}
          onChange={this.handleChanges}
        />
        <button>Add</button>
      </form>
    );
  }
}

export default AddItemForm;
