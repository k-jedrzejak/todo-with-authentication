import AppHeading from "./components/AppHeading";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="font-poppins bg-[#758694] min-h-screen text-white flex flex-col justify-end items-center">
      <AppHeading heading="TODO" />
      <main className="relative bg-white w-[95vw] h-[90vh] rounded-xl shadow-[0_10px_10px_rgba(0,0,0,0.4)] overflow-hidden grid grid-cols-1 grid-rows-[auto_auto_1fr] md:grid-cols-3 md:grid-rows-[auto_1fr] lg:w-[60vw]">
        <Header />
        <Sidebar />
        <TodoList />
      </main>
      <Footer />
    </div>
  );
}

export default App;
