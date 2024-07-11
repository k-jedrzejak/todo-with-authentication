import AppHeading from "./components/AppHeading"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="font-poppins bg-[#758694] min-h-screen text-white flex flex-col justify-center items-center">
      <AppHeading heading="TODOAPP" />  
      <main className="relative bg-white w-[95vw] h-[80vh] grid-rows-[60px_auto_auto] rounded-xl shadow-[0_10px_10px_rgba(0,0,0,0.4)] overflow-hidden grid grid-cols-1 md:grid-cols-3 md:grid-rows-[60px_1fr] lg:w-[60vw]">
        <header className="col-span-1 md:col-span-3 row-[1/2] bg-[#83919f] border-b border-black/[0.09]"></header>
        <section className="col-span-1 md:col-start-3 md:col-span-1 row-[2/3] bg-[#ced4db] border-t md:border-t-0 border-black/[0.09] md:border-l"></section>
        <ul className="col-span-1 md:col-span-2 row-[2/3] md:row-[2/3]"></ul>
      </main> 
      <Footer />
    </div>
  )

}

export default App
