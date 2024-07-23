import { useContext } from "react";
import { TodosContext } from "../contexts/TodoContextProvider";

const useTodosContext = () => {
  const context = useContext(TodosContext);
  if (!context) {
    throw new Error(
      "useTodosContext must be used within a TodoContextProvider"
    );
  }
  return context;
};

export default useTodosContext;
