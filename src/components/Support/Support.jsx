import { FaRegStar, FaStar } from "react-icons/fa";
const Support = () => {
  return (
    <div className="md:flex gap-5 items-center justify-center px-3 lg:px-32 py-10">
      <div className="lg:space-y-5 space-y-4 lg:w-1/2">
        <h1 className="font-bold text-4xl">
          How we support our <br /> pratner all over the world
        </h1>
        <p>
          SaaS become a common delivery model for many business application,
          including office software, messaging software, payroll processing
          software, DBMS software, management software
        </p>
        <div className="flex items-center gap-4">
          <div className="space-y-2">
            <h1 className="flex items-center gap-1 text-yellow-400">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </h1>
            <p className="font-bold">4.9 / 5 rating</p>
            <p>databricks</p>
          </div>
          <div className="space-y-2">
            <h1 className="flex items-center gap-1 text-yellow-400">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStar />
            </h1>
            <p className="font-bold">4.5 / 5 rating</p>
            <p>Chainalysis</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/2  lg:space-y-5 space-y-3">
        <div>
          <h1 className="font-bold text-2xl">Publishing</h1>
          <p>
            Plan, collaborate, and publishing your contetn that drivees
            meaningful engagement and growth for your barnd
          </p>
        </div>
        <div>
          <h1 className="font-bold text-2xl">Analytics</h1>
          <p>Analyze your performance and create goegeous report</p>
        </div>
        <div>
          <h1 className="font-bold text-2xl">Engagement</h1>
          <p>Quiuckly navigate you anda engage with your adience</p>
        </div>
      </div>
    </div>
  );
};

export default Support;
