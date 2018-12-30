import React from 'react';

const Todos = (props) => {
  const todoList = props.todos.length ? (
    props.todos.map(todo => {
      return (
        <div className="collection-item" key={todo.id}>
          <span>{todo.content}</span>
          <span className="right"><button onClick={() => { props.deleteTodo(todo.id) }}>X</button></span>
        </div>
      )
    })
  ) : (<p className="center">You have no todo's left</p>)
  return (
    <div className="todos collection">
      {todoList}
    </div>
  )
}

export default Todos;