import React, { useState } from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

export default function App() {
  const [todos, setTodos] = useState([])

  return (
    <div className="App">
      <TodoForm onCreateTodo={addTodo} />
      <TodoList todos={todos} onDelete={deleteTodo} />
    </div>
  )

  function addTodo(todo) {
    setTodos([...todos, todo])
  }

  function deleteTodo(index) {
    setTodos([...todos.slice(0, index), ...todos.slice(index + 1)])
  }
}
