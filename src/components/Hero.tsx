import picHero from "../assets/Hero.png";


const Hero = () => {
  return (
    <>
      <section id="hero">
        <div className="relative">
          <img src={picHero} alt="Hero" className="lg:w-[1540px] lg:h-[682px]" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center lg:gap-6 md:gap-4 lg:mb-48 md:mb-40 mb-16 gap-1 ">
            <p className="font-PlayFair font-medium text-[#34746b] lg:text-3xl md:text-2xl text-lg">
              Organic All Natural
            </p>
            <h1 className="font-JosefinSans text-[#504F4F] lg:text-5xl md:text-3xl text-2xl">
              HANDMADE ARGAN SOAP
            </h1>
            <a
              href="https://www.instagram.com/_tadefi/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="text-white font-JosefinSans bg-[#34746b] lg:p-4 md:p-4 lg:w-[15rem] lg:text-lg md:w-[13rem] p-2 text-base w-[11rem] hover:bg-white hover:text-[#34746b] border border-[#34746b] hover:border-[#34746b] ease-in-out duration-500">
                Get Soap Now
              </button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
