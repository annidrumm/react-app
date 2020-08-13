import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

export default function TodoForm({ onCreateTodo }) {
  return (
    <Form onSubmit={handleSubmit}>
      <label htmlFor="todo-input">Add Your To Dos</label>
      <div>
        <Input id="todo-input" name="todo" />
        <Button>Add</Button>
      </div>
    </Form>
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

const Input = styled.input`
  font-family: sans-serif;
  font-size: 1em;
  display: grid;
  justify-items: center;
  gap: 20px;
`

const Form = styled.form`
  display: grid;
  justify-items: center;
  gap: 20px;
`

const Button = styled.button`
  background-color: skyblue;
  box-shadow: 2px 10px 16px rgba(135, 206, 235);
  border-radius: 50px;
  overflow: hidden;
  border: none;
  font-family: inherit;
  font-size: inherit;
  color: inherit;
  padding: 15px 30px;
  margin: 15px 30px;
`

TodoForm.defaultProps = {
  text: 'Coffee',
  id: uuidv4(),
}
