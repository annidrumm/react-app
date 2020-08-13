import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

export default function Todo({ text, completed, onDelete }) {
  return (
    <div>
      <label className="Todo">
        <input
          style={{ marginRight: 10 }}
          checked={completed}
          type="checkbox"
        />
        {text}
      </label>
      <Button onClick={onDelete}>x</Button>
    </div>
  )
}

const Button = styled.button`
  color: crimson;
  background: transparent;
  border: none;
  margin-left: 10px;
  font-size: 1em;
  border-radius: 50px;
`

Todo.defaultProps = {
  text: 'Coffee',
  completed: true,
  onClick: undefined,
}
