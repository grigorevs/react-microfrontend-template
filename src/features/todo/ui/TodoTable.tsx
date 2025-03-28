import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { getTodos, GetTodosParams } from '../api/todoApi';
import { Todo, TodoFormValues, TodoItem } from '../types/todo';
import { StyledInput, StyledTable, StyledTableCell, StyledTableHeader, TableContainer } from './styledTodoTable';

const TodoTable = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState(false);
  const observer = useRef<IntersectionObserver | null>(null);
  const [start, setStart] = useState(0);
  const [search, setSearch] = useState('');
  const limit = 10;

  const {
    watch,
    register,
    formState: { errors },
  } = useForm<TodoFormValues>({
    defaultValues: {
      limit: 20,
      start: 0,
      searchQuery: '',
    },
  });

  const searchQuery = watch('searchQuery');

  const lastTodoElementRef = useCallback(
    (node: HTMLTableRowElement | null) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setStart((prevStart) => prevStart + limit);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore],
  );

  useEffect(() => {
    setTodos([]);
    setStart(0);
    setHasMore(true);
    setSearch(searchQuery || '');
  }, [searchQuery]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const params: GetTodosParams = {
          limit: limit,
          start: start,
          search: search,
        };

        const fetchedTodos: Todo[] = await getTodos(params);

        if (fetchedTodos.length === 0) {
          setHasMore(false);
        } else {
          setTodos((prevTodos) => [...prevTodos, ...fetchedTodos]);
          setHasMore(true);
        }
      } catch (err: unknown) {
        console.error('Failed to fetch todos', err);
        let errorMessage = 'An unknown error occurred.';

        if (err instanceof Error) {
          errorMessage = err.message;
        } else {
          errorMessage = String(err);
        }

        setError(`Failed to fetch todos: ${errorMessage || 'Unknown error'}`);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [start, search, limit]);

  return (
    <div>
      <form>
        <div>
          <label htmlFor="searchQuery">
            Поиск:
            <StyledInput role="search" type="text" id="searchQuery" {...register('searchQuery')} />
            {errors.searchQuery && <span>{errors.searchQuery.message}</span>}
          </label>
        </div>
        <TableContainer>
          <StyledTable>
            <thead>
              <tr>
                <StyledTableHeader>ID</StyledTableHeader>
                <StyledTableHeader>Заголовок</StyledTableHeader>
                <StyledTableHeader>Выполнено</StyledTableHeader>
              </tr>
            </thead>
            <tbody>
              {todos.map((todo, index) => (
                <tr key={todo.id} ref={todos.length - 1 === index ? lastTodoElementRef : null}>
                  <StyledTableCell>{todo.id}</StyledTableCell>
                  <StyledTableCell>{todo.title}</StyledTableCell>
                  <StyledTableCell>{todo.completed ? 'Выполнено' : 'Не выполнено'}</StyledTableCell>
                </tr>
              ))}
              {loading && (
                <tr>
                  <td colSpan={3}>Загрузка...</td>
                </tr>
              )}
            </tbody>
          </StyledTable>
        </TableContainer>
        {error && <div>Error: {error}</div>}
      </form>
    </div>
  );
};

export default TodoTable;
