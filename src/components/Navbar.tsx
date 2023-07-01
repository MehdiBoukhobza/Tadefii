import { useState } from "react";
import TadefiLogo from "../assets/tadefiLogo.png";
import { HiMenuAlt2 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <div className="flex justify-around align-middle items-center p-3 md:h-24 h-20 bg-[#F5F5F5] ">
        <img src={TadefiLogo} alt="test" className="w-[20%] md:w-[10%]" />
        <div>
          <ul className="cursor-pointer hidden md:flex font-JosefinSans gap-11 md:text-base lg:text-xl text-[#3C3C3C]">
            <li className="hover:text-[#34746b] hover:underline ">
              <Link to="hero" smooth={true} duration={500}>
                Home
              </Link>
            </li>
            <li className="hover:text-[#34746b] hover:underline">
              <Link to="about" smooth={true} duration={500}>
                About
              </Link>
            </li>
            <li className="hover:text-[#34746b] hover:underline">
              <Link to="products" smooth={true} duration={500}>
                Products
              </Link>
            </li>
            <li className="hover:text-[#34746b] hover:underline">
              <Link to="testimonials" smooth={true} duration={500}>
                Testimonials
              </Link>
            </li>
            <li className="hover:text-[#34746b] hover:underline">
              <Link to="contact" smooth={true} duration={500}>
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div onClick={handleNav} className="block md:hidden">
          {!nav ? <IoMdClose size={25} /> : <HiMenuAlt2 size={25} />}
        </div>

        <div
          className={
            !nav
              ? "fixed left-0 top-0 z-10 w-[60%] h-full pt-4 border-r border-r-gray-600 bg-[#9a8b6e] ease-in-out duration-500"
              : "fixed left-[-80rem]"
          }
        >
          <img src={TadefiLogo} alt="test" className="w-[40%] ml-2" />
          <ul className="cursor-pointer flex flex-col  font-JosefinSans text-lg text-slate-900 pl-5 ">
            <li className="hover:text-[#34746b] hover:underline border-b border-gray-600 pb-5 pt-5">
              <Link to="hero" smooth={true} duration={500} onClick={handleNav}>
                Home
              </Link>
            </li>
            <li className="hover:text-[#34746b] hover:underline border-b border-gray-600 pb-5 pt-5">
              <Link to="about" smooth={true} duration={500} onClick={handleNav}>
                About
              </Link>
            </li>
            <li className="hover:text-[#34746b] hover:underline border-b border-gray-600 pb-5 pt-5">
              <Link to="products" smooth={true} duration={500} onClick={handleNav}>
                Products
              </Link>
            </li>
            <li className="hover:text-[#34746b] hover:underline border-b border-gray-600 pb-5 pt-5">
              <Link to="testimonials" smooth={true} duration={500} onClick={handleNav}>
                Testimonials
              </Link>
            </li>
            <li className="hover:text-[#34746b] hover:underline pt-5">
              <Link to="contact" smooth={true} duration={500} onClick={handleNav}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
