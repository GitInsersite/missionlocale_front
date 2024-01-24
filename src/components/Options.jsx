import { useMediaQuery } from "react-responsive";

function Options() {
  const isLaptopOrLarger = useMediaQuery({ minWidth: 1024 });

  return (
    <div className="flex flex-col bg-white items-center h-[100px] border-2 md:items-start md:px-4" style={isLaptopOrLarger ? { clipPath: "ellipse(150% 95% at 50% 0)" } : {clipPath: "ellipse(500% 100% at 50% 0)"}}>
      <div className="md:w-full md:px-6">
        <h1 className="font-bold mb-6 md:text-2xl">
          <span className="border-b-2 border-[#ADFF2F] pb-[0.5px]">LA M</span>
          ISSION LOCALE EN IMAGE
        </h1>
        <div className="lg:flex lg:justify-center">
          
        </div>
      </div>
    </div>
  );
}

export default Options;
