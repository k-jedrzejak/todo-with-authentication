import AddTodoForm from "./AddTodoForm";
import Button from "./Button";

const Sidebar = () => {
  return (
    <section className="col-span-1 md:col-start-3 md:col-span-1 md:row-[2/3] bg-[#ced4db] border-t md:border-t-0 border-black/[0.09] md:border-l p-3 flex justify-start flex-col md:justify-between space-y-2">
      <AddTodoForm />
      <div className="space-y-2">
        <Button buttonType="secondary">Log in</Button>
        <Button buttonType="secondary">Register</Button>
      </div>
    </section>
  );
};

export default Sidebar;
