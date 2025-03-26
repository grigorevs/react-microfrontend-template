import React from 'react';
import { useForm } from 'react-hook-form';

interface TodoFiltersProps {
  onSearch: (search: string) => void;
  onFilter: (completed?: boolean) => void;
}

interface FormValues {
  search: string;
}

const TodoFilters: React.FC<TodoFiltersProps> = ({ onSearch, onFilter }) => {
  const { register, handleSubmit } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    onSearch(data.search);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Search todos" {...register('search')} />
      <button type="submit">Search</button>
      <button type="button" onClick={() => onFilter(undefined)}>
        All
      </button>
      <button type="button" onClick={() => onFilter(true)}>
        Completed
      </button>
      <button type="button" onClick={() => onFilter(false)}>
        Incomplete
      </button>
    </form>
  );
};

export default TodoFilters;
