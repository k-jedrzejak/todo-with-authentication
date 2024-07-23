import useTodosContext from "../hooks/useTodosContext";

const Counter = () => {
  const { numberOfCompletedTodos, numberOfTotalTodos } = useTodosContext();
  return (
    <>
      <span className="font-bold">{numberOfCompletedTodos}</span>/
      {numberOfTotalTodos} todos completed
    </>
  );
};

export default Counter;
