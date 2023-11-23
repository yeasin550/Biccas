
import rectangle from "../../assets/Rectangle.png"
import ellipse from "../../assets/Ellipse.png";
import { FaComment, FaCheckCircle } from "react-icons/fa";

const Benifit = () => {
    return (
      <div className="my-32 w-10/12 mx-auto md:flex items-center pl-5">
        <div className="lg:w-1/2 mb-12 text-left">
          <h1 className="font-bold text-4xl lg:ml-8">
            What Benifit Will <br /> You Get
          </h1>
          <div className="lg:p-3 mx-auto">
            <div className="rounded-lg overflow-hidden">
              <div className="flex flex-col lg:p-6 border-gray-300 bg-white">
                <div className="flex-1 inline-flex items-center mb-3">
                  <div className="bg-green-300 mr-3 p-1 rounded-full">
                    <svg
                      className="h-3 w-3 text-green-800 fill-current"
                      viewBox="0 0 20 20"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <polygon points="0 11 2 9 7 14 18 3 20 5 7 18" />
                    </svg>
                  </div>
                  <p className="">Free Consulting With Expert Saving Money</p>
                </div>
                <div className="flex-1 inline-flex items-center mb-3">
                  <div className="bg-green-300 mr-3 p-1 rounded-full">
                    <svg
                      className="h-3 w-3 text-green-800 fill-current"
                      viewBox="0 0 20 20"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <polygon points="0 11 2 9 7 14 18 3 20 5 7 18" />
                    </svg>
                  </div>
                  <p className="">Online Banking</p>
                </div>
                <div className="flex-1 inline-flex items-center mb-3">
                  <div className="bg-green-300 mr-3 p-1 rounded-full">
                    <svg
                      className="h-3 w-3 text-green-800 fill-current"
                      viewBox="0 0 20 20"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <polygon points="0 11 2 9 7 14 18 3 20 5 7 18" />
                    </svg>
                  </div>
                  <p className="">Investment Report Every Month</p>
                </div>
                <div className="flex-1 inline-flex items-center mb-3">
                  <div className="bg-green-300 mr-3 p-1 rounded-full">
                    <svg
                      className="h-3 w-3 text-green-800 fill-current"
                      viewBox="0 0 20 20"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <polygon points="0 11 2 9 7 14 18 3 20 5 7 18" />
                    </svg>
                  </div>
                  <p className="">Saving Money For The Future</p>
                </div>
                <div className="flex-1 inline-flex items-center">
                  <div className="bg-green-300 mr-3 p-1 rounded-full">
                    <svg
                      className="h-3 w-3 text-green-800 fill-current"
                      viewBox="0 0 20 20"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <polygon points="0 11 2 9 7 14 18 3 20 5 7 18" />
                    </svg>
                  </div>
                  <p className="">Online Transaction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 lg:ml-16 relative">
          <img className="lg:w-96 w-full mb-5" src={rectangle} alt="" />
          <div className="flex items-center gap-2 py-2 px-3 bg-white border rounded-md absolute -mt-96 lg:-ml-24 -ml-10">
            <img src={ellipse} alt="" />
            <div>
              <h1>Amanda Young</h1>
              <p>Expert Saving Money</p>
            </div>
            <button className="py-3 px-3 flex items-center justify-center rounded-full bg-[#74C9A9]">
              <FaComment />
            </button>
          </div>
          <div className="flex absolute items-center bg-white w-64 z-50 border rounded-md py-2 px-2 my-3 gap-3 -mt-16 -ml-10 lg:-ml-24">
            <span className="text-[#74C9A9]">
              <FaCheckCircle />
            </span>
            Money Transfer Successful
          </div>
          <div className="absolute  bg-white w-48 z-50 border rounded-md py-2 px-2 my-3 -mt-80 ml-32 lg:ml-64">
            <p>Total Income</p>
            <h1 className="font-bold">$245.00</h1>
          </div>
        </div>
      </div>
    );
};

export default Benifit;
