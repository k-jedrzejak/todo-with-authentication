import { createContext, useState } from "react";
import { Todo, TTodosContext } from "../types/types";

type TodoContextProviderProps = {
  children: React.ReactNode;
};

export const TodosContext = createContext<TTodosContext | null>(null);

const TodoContextProvider = ({ children }: TodoContextProviderProps) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const numberOfTotalTodos = todos.length;
  const numberOfCompletedTodos = todos.filter((todo) => todo.isCompleted)
    .length;
  const todosLimit = 3;

  const handleAddTodo = (todoText: string) => {
    if (todos.length >= todosLimit) {
      alert("Log in to add more todos");
      return;
    } else {
      setTodos((prev) => [
        ...prev,
        { id: prev.length + 1, text: todoText, isCompleted: false },
      ]);
    }
  };

  const handleDeleteTodo = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const handleToggleTodo = (id: number) => {
    setTodos(
      todos.map((item) => {
        if (item.id === id) {
          return { ...item, isCompleted: !item.isCompleted };
        }
        return item;
      })
    );
  };
  return (
    <TodosContext.Provider
      value={{
        todos,
        numberOfTotalTodos,
        numberOfCompletedTodos,
        handleAddTodo,
        handleDeleteTodo,
        handleToggleTodo,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
};

export default TodoContextProvider;
