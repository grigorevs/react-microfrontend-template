import { useState, useEffect } from 'react';
import { getTodos } from '../api/todoApi';
import { Todo } from '../types/todo';

interface UseTodoParams {
  limit?: number;
  search?: string;
  completed?: boolean;
}

const useTodo = (params: UseTodoParams = {}) => {
  const { limit = 10, search, completed } = params;
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const fetchTodos = async () => {
      setLoading(true);
      setError(null);
      try {
        const newTodos = await getTodos({ limit, start: page * limit, completed, search });
        console.log('Данные, полученные из API:', newTodos);
        setTodos((prevTodos) => (page === 0 ? newTodos : [...prevTodos, ...newTodos]));
        if (newTodos.length < limit) {
          setHasMore(false);
        }
      } catch (e: unknown) {
        if (e instanceof Error) {
          setError(e.message);
        } else {
          setError('An unknown error occurred');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchTodos();
  }, [limit, page, completed, search]);

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const resetPage = () => {
    setPage(0);
    setTodos([]);
    setHasMore(true);
  };

  return {
    todos,
    loading,
    error,
    loadMore,
    hasMore,
    resetPage,
  };
};

export default useTodo;
