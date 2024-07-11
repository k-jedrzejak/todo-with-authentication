function App() {
  return (
    <div className="font-poppins bg-[#758694] min-h-screen text-white flex flex-col justify-center items-center">
      <h1 className="text-white/10 uppercase text-[60px] font-bold absolute left-1/2 translate-x-[-50%] top-[2vh] tracking-widest md:text-[90px] md:top-[-2vh]">todoapp</h1>
      <main className="relative bg-white w-[95vw] h-[80vh] grid-rows-[60px_auto_auto] rounded-xl shadow-[0_10px_10px_rgba(0,0,0,0.4)] overflow-hidden grid grid-cols-1 md:grid-cols-3 md:grid-rows-[60px_1fr] lg:w-[60vw]">
        <header className="col-span-1 md:col-span-3 row-[1/2] bg-[#83919f] border-b border-black/[0.09]"></header>
        <section className="col-span-1 md:col-start-3 md:col-span-1 row-[2/3] bg-[#ced4db] border-t md:border-t-0 border-black/[0.09] md:border-l"></section>
        <ul className="col-span-1 md:col-span-2 row-[2/3] md:row-[2/3]"></ul>
      </main> 
      <footer className="text-right w-[95vw] text-[10px] opacity-30 mt-2 lg:w-[60vw]">
        <small>v.1.0</small>
      </footer>
    </div>
  )

}

export default App
