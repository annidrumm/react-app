import React from 'react'
import Todo from './Todo'

export default {
  title: 'Example/ToDo',
  component: Todo,
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
}

const Template = (args) => <Todo {...args} />

export const ToDoList = Template.bind({})
