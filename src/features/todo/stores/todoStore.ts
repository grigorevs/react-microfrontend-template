import { create } from 'zustand';
import { Todo } from '../types/todo';

interface TodoState {
  todos: Todo[];
  setTodos: (todos: Todo[]) => void;
}

export const useTodoStore = create<TodoState>((set) => ({
  todos: [],
  setTodos: (todos) => set({ todos }),
}));
