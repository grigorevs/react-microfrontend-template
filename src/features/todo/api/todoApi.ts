import axios from 'axios';
import { Todo } from '../types/todo';

const TODO_API_URL = 'https://jsonplaceholder.cypress.io/todos';

export interface GetTodosParams {
  limit?: number;
  start?: number;
  completed?: boolean;
  search?: string;
}

export const getTodos = async (params: GetTodosParams): Promise<Todo[]> => {
  try {
    const { limit = 10, start = 0, completed, search } = params;
    let url = `${TODO_API_URL}?_limit=${limit}&_start=${start}`;

    if (completed !== undefined) {
      url += `&completed=${completed}`;
    }

    if (search) {
      url += `&q=${search}`;
    }

    const response = await axios.get<Todo[]>(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching todos:', error);
    return [];
  }
};
