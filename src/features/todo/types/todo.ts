export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface TodoItem {
  id: number;
  title: string;
  completed: boolean;
}

export interface TodoFormValues {
  todos: TodoItem[];
  limit: number;
  start: number;
  searchQuery: string | undefined;
}
