
import { FaRegPauseCircle, FaUnsplash } from "react-icons/fa";
import { RxNotionLogo } from "react-icons/rx";
import { FcMenu } from "react-icons/fc";
import frameb from "../../assets/Frameb.png";

const Banner = () => {
  return (
    <div className="lg:px-10 mb-24">
      <div className="my-20 w-10/12 mx-auto md:flex items-center pl-5">
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
        <div className="lg:w-1/2 lg:ml-40 relative">
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
      <div className="lg:mx-7 mx-3">
        <h1 className="text-center font-bold text-4xl my-5">
          More than 25,000 teams use Collars
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5">
          <p className="text-2xl flex items-center">
            {" "}
            <FaUnsplash /> Unsplash
          </p>
          <p className="text-2xl flex items-center">
            {" "}
            <RxNotionLogo /> Notion
          </p>
          <p className="text-2xl flex items-center">
            {" "}
            <FcMenu /> INTERCOM
          </p>
          <p className="text-2xl flex items-center">
            {" "}
            <FcMenu /> Descript
          </p>
          <p className="text-2xl flex items-center">
            {" "}
            <FaUnsplash /> Grammarly
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
