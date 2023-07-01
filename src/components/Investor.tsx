import argan3 from "../assets/argan3.jpg";
import BP from "../DP TADEFI.pdf";

const Investor = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = BP;
    link.download = "Business Plan Tadefi.pdf";
    link.click();
  };
  return (
    <>
      <section id="investor">
        <div className="relative">
          <img
            src={argan3}
            alt="Hero"
            className="w-screen  filter brightness-50"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center lg:gap-6 md:gap-4 gap-1 ">
            <h1 className="font-JosefinSans text-white lg:text-5xl md:text-3xl text-2xl">
              For Investors & Supporters
            </h1>
            <p className="font-JosefinSans font-light px-10 text-white lg:text-4xl md:text-2xl text-lg ">
              If you want to invest or support our business, please take a look at
              our Business Proposal
            </p>
            <button onClick={handleDownload} className="text-white font-JosefinSans  border-[#8d6f46] lg:p-5 lg:mt-5 md:p-4 lg:w-[23rem] lg:text-3xl md:w-[16rem] md:text-xl p-2 mt-3 text-base w-[11rem] hover:bg-[#8d6f46] hover:text-white border ease-in-out duration-500 ">
              Download BP
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Investor;
