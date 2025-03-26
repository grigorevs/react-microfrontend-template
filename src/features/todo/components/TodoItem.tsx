import React from 'react';
import { Todo } from '../types/todo';

interface TodoItemProps {
  todo: Todo;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  return (
    <div>
      {todo.id}: {todo.title} ({todo.completed ? 'Completed' : 'Not Completed'})
    </div>
  );
};

export default TodoItem;
