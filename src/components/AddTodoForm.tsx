import Button from "./Button";

const AddTodoForm = () => {
  return (
    <form className="text-[#83919f]">
      <div className="text-center mb-2">Add a todo</div>
      <input type="text" className="block w-full text-sm h-[45px] border border-black/12 rounded-[5px] bg-transparent focus:outline-none  focus:border-[#83919f] px-1 mb-2"/>
      <Button> Add </Button>
    </form>
  )
}

export default AddTodoForm;