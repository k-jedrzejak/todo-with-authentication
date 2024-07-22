import AppHeading from "./components/AppHeading"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import TodoList from "./components/TodoList"

function App() {
  return (
    <div className="font-poppins bg-[#758694] min-h-screen text-white flex flex-col justify-center items-center">
      <AppHeading heading="TODOAPP" />  
      <main className="relative bg-white w-[95vw] h-[80vh] grid-rows-[60px_auto_auto] rounded-xl shadow-[0_10px_10px_rgba(0,0,0,0.4)] overflow-hidden grid grid-cols-1 md:grid-cols-3 md:grid-rows-[60px_1fr] lg:w-[60vw]">
        <Header />
        <Sidebar />
        <TodoList />
      </main> 
      <Footer />
    </div>
  )

}

export default App
