import { useState } from "react";
import Button from "./Button";
import useTodosContext from "../hooks/useTodosContext";

const AddTodoForm = () => {
  const [todoText, setTodoText] = useState("");
  const { handleAddTodo } = useTodosContext();
  return (
    <form
      className="text-[#83919f]"
      onSubmit={(e) => {
        e.preventDefault();
        handleAddTodo(todoText);
        setTodoText("");
      }}
    >
      <div className="text-center mb-2">Add a todo</div>
      <input
        type="text"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
        className="block w-full text-sm h-[5vh] border border-black/12 rounded-[5px] bg-transparent focus:outline-none  focus:border-[#83919f] px-1 mb-2"
      />
      <Button> Add </Button>
    </form>
  );
};

export default AddTodoForm;
