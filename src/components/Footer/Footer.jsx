import vector from  "../../assets/Vector.png"
const Footer = () => {
  return (
    <div className=" bg-[#161C28] text-white lg:px-10 py-8">
      <div className="md:flex items-center justify-around my-12 w-10/12 mx-auto gap-9">
        <div className="lg:w-1/2">
          <div className="space-y-5">
            <h1 className="font-bold text-3xl">
              People are Saying <br /> About Do Whith
            </h1>
            <p>
              Everything you need to accept to payment and grow your money of
              manage anywhere on planet
            </p>
            <p>
              I am very helped by this E-wallet application , my days are very
              easy to use this application and its very helpful in my life ,
              even I can pay a short time 😍
            </p>
            <p>_ Aria Zinanrio</p>
          </div>
          <div className="flex space-x-2 items-center mt-10 animate-out zoom-in duration-200 delay-300">
            <div>
              <div className="flex space-x-2 items-center flex-col md:flex-row">
                <div className="flex -space-x-2 overflow-hidden p-2">
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-gray-200 hover:scale-105 tranform duration-100"
                    src="https://randomuser.me/api/portraits/men/51.jpg"
                    alt=""
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-gray-200 hover:scale-105 tranform duration-100"
                    src="https://randomuser.me/api/portraits/women/4.jpg"
                    alt=""
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-gray-200 hover:scale-105 tranform duration-100"
                    src="https://randomuser.me/api/portraits/men/34.jpg"
                    alt=""
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-gray-200 hover:scale-105 tranform duration-100"
                    src="https://randomuser.me/api/portraits/women/6.jpg"
                    alt=""
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-gray-200 hover:scale-105 tranform duration-100"
                    src="https://randomuser.me/api/portraits/men/9.jpg"
                    alt=""
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-gray-200 hover:scale-105 tranform duration-100"
                    src="https://randomuser.me/api/portraits/women/9.jpg"
                    alt=""
                  />
                </div>
                <div>5,000+ other members</div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 p-4 mb-12">
          <div>
            <div className="flex flex-col justify-center gap-4 text-center my-5">
              <img className="w-20 mx-auto" src={vector} alt="" />
              <h1 className="font-bold text-2xl">Get Started</h1>
            </div>
          </div>
          <div className="space-y-2">
            <p>Email</p>
            <input
              className="py-2 px-3 rounded-md w-full"
              type="email"
              placeholder="Enter Your Email"
              name=""
              id=""
            />
            <p>Message</p>
            <textarea
              className="py-2 px-3 rounded-md w-full"
              placeholder="Enter Your Message"
              name=""
              id=""
              cols="30"
              rows="2"
            ></textarea>{" "}
            <br />
            <button className="py-3 px-4 w-full rounded-md bg-[#54BD95]">
              Request Demo
            </button>
            <p className="text-end">or Start Free Trial</p>
          </div>
        </div>
      </div>

      <div className="md:flex justify-around items-center mx-3">
        <div className="space-y-4">
          <h1 className="self-center text-4xl font-semibold whitespace-nowrap text-[#63caa3]">
            Biccas
          </h1>
          <p>Get started noew try our product</p>
          <input
            type="text"
            placeholder="Enter your email here"
            className="border-2 rounded-full p-2 w-full max-w-xs"
          />
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Support</h3>
          <ul className="space-y-3 text-gray-300">
            <li>Help centre</li>
            <li>Account information</li>
            <li>About</li>
            <li>Contact us</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Help and Solution</h3>
          <ul className="space-y-3 text-gray-300">
            <li>Talk to support</li>
            <li>Support docs</li>
            <li>System status</li>
            <li>Covid responde</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Product</h3>
          <ul className="space-y-3 text-gray-300">
            <li>Update</li>
            <li>Security</li>
            <li>Beta test</li>
            <li>Pricing product</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
