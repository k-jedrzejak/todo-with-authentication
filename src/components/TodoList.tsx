import DeleteButton from "./DeleteButton";
import useTodosContext from "../hooks/useTodosContext";

const TodoList = () => {
  const { todos, handleDeleteTodo, handleToggleTodo } = useTodosContext();
  return (
    <>
      {todos.length === 0 ? (
        <div className="col-span-1  md:col-span-2  md:row-[2/3] text-[#83919f] mt-2 text-[22px] text-center">
          Add some todos!
        </div>
      ) : (
        <ul className="col-span-1 overflow-auto md:col-span-2 md:row-[2/3] text-[#83919f]">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="px-4 py-2 flex justify-between border-b-[1px] border-black/8 cursor-pointer"
              onClick={() => handleToggleTodo(todo.id)}
            >
              <span
                className={`${
                  todo.isCompleted ? "line-through text-[#CED4DA]" : ""
                }`}
              >
                {todo.text}
              </span>
              <DeleteButton id={todo.id} onDeleteTodo={handleDeleteTodo} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default TodoList;
