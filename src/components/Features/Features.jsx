import frame1 from "../../assets/Frame1.png";
import frame2 from "../../assets/Frame2.png";
import frame3 from "../../assets/Frame3.png";
const Features = () => {
  return (
    <div className="lg:px-10 px-2">
      <div className="md:flex items-center justify-around my-20 md:space-y-0 space-y-5">
        <h1 className="font-bold text-4xl">
          Our Features <br /> you cab get
        </h1>
        <p className="lg:w-96 w-80">
          We offer a variety of interesting features that you can help increase
          yor productivity at work and manage your project easy
        </p>
        <button
          className="text-white bg-[#54BD95] hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-4 lg:px-6 py-2 lg:py-3 sm:mr-2 lg:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800"
        >
          Get Started
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:px-20 pb-20">
        <div className="lg:w-80 border rounded-2xl lg:mb-0 mb-20">
          <img className="w-full h-full mb-2" src={frame1} alt="" />
          <h1 className="font-bold text-2xl">Collaborations Teams </h1>
          <p>Here you can handle projects together with team virtually</p>
        </div>
        <div className="lg:w-80 border rounded-2xl lg:mb-0 mb-20">
          <img className="w-full h-full mb-2" src={frame2} alt="" />
          <h1 className="font-bold text-2xl">Cloud Storage</h1>
          <p>
            No nedd to worry about storage because we provide storage up to 2 TB
          </p>
        </div>
        <div className="lg:w-80 border rounded-2xl lg:mb-0 mb-20">
          <img className="w-full h-full mb-2" src={frame3} alt="" />
          <h1 className="font-bold text-2xl">Daily Analytics</h1>
          <p>
            We always provide useful informatin to make it easier for you every
            day
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
