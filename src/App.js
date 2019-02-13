import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Photos from './components/Photos';
import About from './components/About';
import Contact from './components/Contact';
import FcTable from './components/FcTable';
import Table from './components/Table';
import Post from './components/Post';;
// import Todos from './Todos';
// import AddTodo from './AddTodo';

class App extends Component {
  state = {
    todos: [
      { id: 1, content: 'todo1' },
      { id: 2, content: 'todo2' }
    ]
  }
  // deleteTodo = (id) => {
  //   // console.log(id);
  //   const todos = this.state.todos.filter(todo => {
  //     return todo.id !== id;
  //   });
  //   this.setState({ todos });
  // }
  // addTodo = (todo) => {
  //   let todoId = Math.random();
  //   let newTodoItem = {
  //     id: todoId,
  //     content: todo.content
  //   }
  //   let todos = [...this.state.todos, newTodoItem];
  //   this.setState({ todos });
  // }
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/photos' component={Photos} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <Route path='/table' component={Table} />
            <Route path='/fctable' component={FcTable} />
            <Route path='/:post_id' component={Post} />
          </Switch>
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
