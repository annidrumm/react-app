import React from 'react'
import './TodoForm.css'

export default function TodoForm({ onSubmit }) {
  return (
    <form onSubmit={onSubmit} className="TodoForm">
      <label htmlFor="todo-input">Add Your Dos</label>
      <div>
        <input id="todo-input" name="todo" />
        <button className="Button">Add</button>
      </div>
    </form>
  )
}
