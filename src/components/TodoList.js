import React from 'react'
import Todo from './Todo'
import './TodoList.css'

export default function TodoList({ todos }) {
  return (
    <section className="TodoList">
      {todos.map(({ text, completed, id }) => (
        <Todo key={id} text={text} completed={completed} />
      ))}
      <Todo text="Coffee" />
      <Todo text="Milk" />
      <Todo text="Sugar" />
      <Todo text="Apples" />
    </section>
  )
}
