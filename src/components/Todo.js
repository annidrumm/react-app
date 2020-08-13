import React from 'react'

export default function Todo({ text, completed, onDelete }) {
  return (
    <div>
      <label className="Todo">
        <input checked={completed} type="checkbox" />
        {text}
      </label>
      <span onClick={onDelete} style={{ color: 'crimson', marginLeft: 10 }}>
        &times;
      </span>
    </div>
  )
}
