export type Todo = {
  id: number;
  text: string;
  isCompleted: boolean;
};

export type TTodosContext = {
  todos: Todo[];
  numberOfTotalTodos: number;
  numberOfCompletedTodos: number;
  handleAddTodo: (todoText: string) => void;
  handleDeleteTodo: (id: number) => void;
  handleToggleTodo: (id: number) => void;
};
