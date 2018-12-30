import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
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
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
        </div>
      </BrowserRouter>
      // <div className="todos-app container">
      //   <h1 className="center blue-text">Todo's</h1>
      //   <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
      //   <AddTodo addTodo={this.addTodo} />
      // </div>
    );
  }
}

export default App;
