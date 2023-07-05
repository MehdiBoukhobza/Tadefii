import ReactPlayer from "react-player";

const About = () => {
  return (
    <>
      <section id="about">
        <div className="bg-[#F9F4F8] grid grid-col-1 md:grid-cols-2 py-10">
          <div className=" flex gap-12 p-4 flex-col  justify-center items-center text-center pb-9">
            <h1 className="font-PlayFair  font-medium text-gray-600 text-3xl md:text-4xl lg:5xl">
              About Us
            </h1>
            <p className="font-JosefinSans text-base lg:text-lg text-center text-[#3F3D40] mx-7  md:mx-3 lg:mx-20   ">
              Welcome to Tadefi ! , the amazing moisturizing soap that's all
              about honey and Argan cake. We're a bunch of enthusiastic students
              from Enactus at Mohammadia School of Engineers, and we truly
              believe in the power of entrepreneurship to make a positive impact
              in our community. <br /> Our soap is crafted with the finest
              natural ingredients and packed in eco-friendly materials, so you
              get a top-notch product that's not only great for your skin but
              also friendly to our environment. <br /> Want to learn more about
              Tadefi and our mission to make the world a better place, one soap
              bar at a time?  Feel free to click on the report crafted by AAOUITA Jalal in collaboration with our team. <br /> Thanks a million
              for supporting us! We appreciate you!
            </p>
            {/* <a
              href="https://www.youtube.com/watch?v=ucKB-kwbdZo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="text-[#34746b] font-JosefinSans lg:p-4 md:p-3 lg:w-[13rem] lg:text-lg md:w-[11rem] md:text-base p-2  text-ms w-[10rem] hover:bg-[#34746b] hover:text-white border border-[#34746b] ease-in-out duration-500 mt-[-1rem] ">
                More About Us
              </button>
            </a> */}
          </div>
          <div className="flex flex-col justify-center text-center items-center pt-3 px-6">
            {/* <img src={TadefiSoap} className="w-[75%] md:w-[80%] rounded-xl" alt="/" /> */}

            <ReactPlayer
              width="100%"
              // height="100%"
              controls
              url="https://www.youtube.com/watch?v=ucKB-kwbdZo"
            />

            <div className="flex bg-white text-center justify-center items-center mt-[.1rem]  shadow-lg">
              <p className="font-DancingScript font-bold text-2xl md:text-3xl lg:text-3xl text-gray-800 p-4 lg:py-8 lg:px-11 ">
                "Authentic beauty solutions for the modern soul."
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
