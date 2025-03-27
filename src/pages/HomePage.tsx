import { TodoTable } from '@features/todo';
import React from 'react';

export const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Home page</h1>
      <TodoTable />
    </div>
  );
};
