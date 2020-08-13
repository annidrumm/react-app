import React, { useState } from 'react'
import './App.css'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

export default function App() {
  const [todos, setTodos] = useState([])

  return (
    <div className="App">
      <TodoForm onCreateTodo={addTodo} />
      <TodoList todos={todos} />
    </div>
  )

  function addTodo(todo) {
    setTodos([...todos, todo])
  }
}
