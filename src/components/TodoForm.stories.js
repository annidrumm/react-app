import React from 'react'
import TodoForm from './TodoForm'

export default {
  title: 'Example/TodoForm',
  component: TodoForm,
  //   argTypes: {
  //     backgroundColor: { control: 'color' },
  //   },
}

const Template = (args) => <TodoForm {...args} />

export const Form = Template.bind({})
