import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoTable from './TodoTable';

describe('TodoTable', () => {
  it('renders the component', () => {
    render(<TodoTable />);
    expect(screen.getByRole('search')).toBeInTheDocument();
  });
});
