import React, { Component } from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';

class App extends Component {
  state = {
    todos: [
      { id: 1, content: 'todo1' },
      { id: 2, content: 'todo2' }
    ]
  }
  deleteTodo = (id) => {
    // console.log(id);
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id;
    });
    this.setState({ todos });
  }
  addTodo = (todo) => {
    let todoId = Math.random();
    let newTodoItem = {
      id: todoId,
      content: todo.content
    }
    let todos = [...this.state.todos, newTodoItem];
    this.setState({ todos });
  }
  render() {
    return (
      <div className="todos-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
