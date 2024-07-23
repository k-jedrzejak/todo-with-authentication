type ButtonProps = {
  children: React.ReactNode;
  buttonType?: "secondary" | "primary";
};

const Button = ({ children, buttonType }: ButtonProps) => {
  return (
    <button
      type="submit"
      className={`transition ease-in-out duration-300 h-[45px] w-full rounded-[5px] bg-[#83919f] text-white cursor-pointer hover:bg-[#717d8a] 
      ${buttonType === "secondary" ? "opacity-[70%]" : ""}`}
    >
      {children}
    </button>
  );
};

export default Button;
