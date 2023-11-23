
import { FaRegPauseCircle } from "react-icons/fa";
import frameb from "../../assets/Frameb.png";

const Banner = () => {
  return (
    <div className="my-32 w-10/12 mx-auto md:flex items-center pl-5">
      <div className="lg:w-1/2 mb-12 text-left space-y-8">
        <h1 className="font-bold text-5xl">
          We’re here to <br /> Increase your <br /> Productivity
        </h1>
        <p>
          Lets make your work more organize and easily using the Taskio
          Dashboard with many of the latest features managing work every day.
        </p>

        <div className="flex items-center gap-5">
          <button className="text-white bg-[#54BD95] flex items-center gap-2 hover:bg-purple-800 focus:ring-4 ml-5 focus:ring-purple-300 font-medium rounded-full text-sm px-4 lg:px-6 py-2 lg:py-3 sm:mr-2 lg:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800">
            {/* <FaRegPauseCircle  className="text-2xl"/> */}
            Get Started
          </button>
          <button className="text-white bg-[#54BD95] flex items-center gap-2 hover:bg-purple-800 focus:ring-4 ml-5 focus:ring-purple-300 font-medium rounded-full text-sm px-2 lg:px-6 py-2 lg:py-3 sm:mr-2 lg:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800">
            <FaRegPauseCircle className="text-xl" />
            View Demo
          </button>
        </div>
      </div>
      <div className="lg:w-1/2 lg:ml-16 relative">
        <img className="lg:w-96 w-full mb-5" src={frameb} alt="" />
        <div className="flex items-center gap-2 py-2 px-3 bg-white border rounded-md absolute lg:-mt-[500px] lg:-ml-24 -ml-10">
          <div>
            <h1>Enter amount</h1>
            <p className="font-bold">$450..00</p>
          </div>
          <button className="py-2 px-5 flex items-center justify-center rounded-full bg-[#74C9A9]">
            Send
          </button>
        </div>
        <div className=" absolute items-center bg-white w-64 z-50 border rounded-md py-2 px-2 my-3 gap-3 -mt-24 -ml-10 lg:-ml-24">
          <p>Total Income</p>
          <h1 className="font-bold">$245.00</h1>
        </div>
        {/* <div className="absolute  bg-white w-48 z-50 border rounded-md py-2 px-2 my-3 -mt-80 ml-32 lg:ml-64">
          <p>Total Income</p>
          <h1 className="font-bold">$245.00</h1>
        </div> */}
      </div>
    </div>
  );
};

export default Banner;
