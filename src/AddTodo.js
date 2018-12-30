import React, { Component } from 'react';

class AddTodo extends Component {
  state ={
    content: ''
  }
  handleChange = (e) => {
    this.setState({
      content: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state);
    this.refs.todoForm.reset();
  }
  render() {
    return (
      <div className="AddTodo">
        <form ref="todoForm" onSubmit={this.handleSubmit}>
          <label>Add Todo: {this.state.content}</label>
          <input type="text" onChange={this.handleChange}></input>
        </form>
      </div>
    );
  }
}

export default AddTodo;
