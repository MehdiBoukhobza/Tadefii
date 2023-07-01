import { BsInstagram } from "react-icons/bs";

const Contact = () => {
  return (
    <>
      <section id="contact">
        <div className="flex flex-col lg:flex-row justify-center  ">
          <div className="bg-[#96886E] w-full p-10">
            <h1 className="font-JosefinSans text-3xl lg:text-4xl text-white pb-5 mt-5 lg:mt-9 uppercase lg:ml-60">
              Stay Tuned for <br /> New Products
            </h1>
            <div className="flex flex-col  items-start align-middle text-left lg:ml-60">
              <p className="font-JosefinSans text-2xl text-gray-700 pb-3">
                Please Follow Us on Instagram
              </p>
              <p className="font-JosefinSans text-lg text-gray-600 pb-6">
                & If you have any questions, DM us
              </p>
              <a
                href="https://www.instagram.com/_tadefi/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsInstagram size={40} className="text-gray-700" />
              </a>
            </div>
          </div>
          <div className="bg-[#34746b] w-full px-10 py-7 lg:px-16 ">
            <h1 className="font-JosefinSans text-3xl text-white pb-5 mt-4 uppercase">
              GET IN TOUCH <br /> with us
            </h1>
            <div className="font-JosefinSans ">
              <p className="text-xl text-gray-700 pb-2 font-medium ">Place</p>
              <p className="text-gray-800 text-lg pb-2">
                Avenue Ibn Sina, Rabat, Morocco
              </p>
              <p className="text-xl text-gray-700 pb-2 font-medium">Phone</p>
              <p className="text-gray-800 text-lg pb-2">
                +212 660-016-597 / +212 689-919-944
              </p>
              <p className="text-xl text-gray-700 pb-2 font-medium">Email</p>
              <p className="text-gray-800 text-lg">argawaahmoiaae@gmail.com</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
