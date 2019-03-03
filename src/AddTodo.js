import React, { Component } from 'react';

class AddTodo extends Component {
  // state ={
  //   content: ''
  // }
  // handleChange = (e) => {
  //   this.setState({
  //     content: e.target.value
  //   })
  // }
  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   this.props.addTodo(this.state);
  //   this.refs.todoForm.reset();
  // }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <label>Add Todo: {this.props.allState.content}</label>
        <input type="text" onChange={this.props.handleChange} value={this.props.allState.content} ></input>
      </form>
    );
  }
}

export default AddTodo;
