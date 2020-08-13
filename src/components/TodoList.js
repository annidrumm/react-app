import React from 'react'
import Todo from './Todo'
import styled from 'styled-components/macro'

export default function TodoList({ todos, onDelete }) {
  return (
    <List className="TodoList">
      {todos.map(({ text, completed, id }, index) => (
        <Todo
          key={id}
          text={text}
          completed={completed}
          onDelete={() => onDelete(index)}
        />
      ))}
      <Todo text="Coffee" />
      <Todo text="Milk" />
      <Todo text="Sugar" />
      <Todo text="Apples" />
    </List>
  )
}

const List = styled.section`
  display: grid;
  gap: 10px;
`
