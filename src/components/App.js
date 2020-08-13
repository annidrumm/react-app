import React, { useState } from 'react'
import './App.css'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import { v4 as uuidv4 } from 'uuid'

export default function App() {
  const [todos, setTodos] = useState([])

  return (
    <div className="App">
      <TodoForm onSubmit={handleSubmit} />
      <TodoList todos={todos} />
    </div>
  )

  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const input = form.todo
    const text = input.value
    setTodos([...todos, { text, id: uuidv4() }])
  }
}
