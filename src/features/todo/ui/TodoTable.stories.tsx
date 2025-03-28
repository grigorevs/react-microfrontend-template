import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import TodoTable from './TodoTable';

export default {
  title: 'features/todo',
  component: TodoTable,
  argTypes: {},
} as Meta<typeof TodoTable>;

const Template: StoryFn<typeof TodoTable> = () => <TodoTable />;

export const TodoTableComponent = Template.bind({});
