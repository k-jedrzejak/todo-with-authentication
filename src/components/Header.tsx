import Counter from "./Counter";

const Header = () => {
  return (
    <header className="flex items-center justify-end px-3 col-span-1 md:col-span-3 row-[1/2] bg-[#83919f] border-b border-black/[0.09]">
      <Counter />
    </header>
  );
};

export default Header;
