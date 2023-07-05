import miel from "../assets/miel.jpg";
import hibiscus2 from "../assets/hibiscus2.jpg";

const Products = () => {
  return (
    <>
      <section id="products">
        <h1 className="font-JosefinSans text-5xl  text-center text-gray-600 pt-16 pb-3 ">
          We Make{" "}
        </h1>
        <p className="font-JosefinSans px-2 text-center text-lg text-gray-400 pb-6">
          HandMade Soaps With Love ❤️ & Care 🤗
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center  text-center p-10 gap-16">
          <div className=" hover:translate-y-[-.5rem] ease-in-out duration-500 rounded-lg shadow-lg flex flex-col border border-[#34746b] w-[21rem] md:w-[25rem] justify-center items-center text-center gap-4 pb-7">
            <img className="rounded-t-lg h-[17rem] mx-auto" src={miel} alt="" />
            <h1 className="font-JosefinSans  text-2xl text-slate-600">
              Honey Oat Soap
            </h1>
            <p className="font-JosefinSans text-lg text-[#918061] font-medium">
              35 Dh - 45 Dh
            </p>
            <a
              href="https://www.instagram.com/_tadefi/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="text-[#918061] font-JosefinSans lg:p-3 lg:text-xl md:w-[11rem] p-2 text-lg w-[10rem] hover:bg-[#918061] hover:text-white border border-[#918061] ease-in-out duration-500 ">
                Buy Now
              </button>
            </a>
          </div>
          <div className="hover:translate-y-[-.5rem] ease-in-out duration-500 rounded-lg shadow-lg  flex flex-col border border-[#34746b] w-[21rem] md:w-[25rem]  justify-center items-center text-center gap-4 pb-7">
            <img
              className="rounded-t-lg h-[17rem]  mx-auto"
              src={hibiscus2}
              alt=""
            />
            <h1 className="font-JosefinSans text-2xl text-slate-600">
              Argan Hibiscus Soap
            </h1>
            <p className="font-JosefinSans text-lg text-[#b587a7] font-medium">
              35 Dh - 45 Dh
            </p>
            <a
              href="https://www.instagram.com/_tadefi/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="text-[#b587a7] font-JosefinSans lg:p-3 lg:text-xl md:w-[11rem] p-2 text-lg w-[10rem] hover:bg-[#b587a7] hover:text-white border border-[#b587a7] ease-in-out duration-500 ">
                Buy Now
              </button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
