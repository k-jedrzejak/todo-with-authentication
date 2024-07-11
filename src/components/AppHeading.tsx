type HeadingProps = {
  heading: string;
}

const AppHeading = ({ heading }: HeadingProps) => {
  return (
    <h1 className="text-white/10 uppercase text-[60px] font-bold absolute left-1/2 
      translate-x-[-50%] top-[2vh] tracking-widest md:text-[90px] md:top-[-2vh]">
      {heading}
    </h1>
  );
}

export default AppHeading;
