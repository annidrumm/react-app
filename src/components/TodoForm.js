import React from 'react'
import './TodoForm.css'
import { v4 as uuidv4 } from 'uuid'

export default function TodoForm({ onCreateTodo }) {
  return (
    <form onSubmit={handleSubmit} className="TodoForm">
      <label htmlFor="todo-input">Add Your Dos</label>
      <div>
        <input id="todo-input" name="todo" />
        <button className="Button">Add</button>
      </div>
    </form>
  )
  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const input = form.todo
    onCreateTodo({ text: input.value, id: uuidv4() })
    form.reset()
    input.focus()
  }
}
