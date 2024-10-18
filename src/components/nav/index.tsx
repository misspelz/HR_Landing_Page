import PrimaryBtn from "@components/button";
import { useState } from "react";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import { NavigationTypes } from "../../types/Navigation";

const navlinks: NavigationTypes[] = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "About Us",
    link: (e: React.MouseEvent<HTMLElement>) => {
      e.preventDefault();
      document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
    },
  },
  {
    id: 3,
    title: "Services",
    link: (e: React.MouseEvent<HTMLElement>) => {
      e.preventDefault();
      document
        .getElementById("services")
        ?.scrollIntoView({ behavior: "smooth" });
    },
  },
];

const Nav = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const [open, setOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className="bg-[#fff] shadow-sm">
      <div className="flex justify-between items-center w-[90%] mx-auto py-[10px] lg:py-0">
        <Link to="/" className="flex gap-[0.4rem] items-center z-[100]">
          <img
            src={"/hr.png"}
            alt="logo"
            className="w-[3rem] h-[3rem] md:w-[5rem] md:h-[5rem]"
          />
        </Link>

        <div className="md:hidden z-[100]">
          {open ? (
            <div onClick={toggleMenu} className="cursor-pointer">
              <IoMdClose color="#000" size={24} />
            </div>
          ) : (
            <div onClick={toggleMenu} className="cursor-pointer">
              <IoMdMenu size={24} />
            </div>
          )}
        </div>

        <div className="hidden md:flex">
          <ul className="flex gap-[16px] lg:gap-[32px] items-center">
            {navlinks.map((navlink) => (
              <li key={navlink.id} className="cursor-pointer">
                {typeof navlink.link === "string" ? (
                  <Link to={navlink.link}>
                    <span
                      className={`md:text-[16px] lg:text-[18px] font-[500] ${
                        isActive(navlink.link)
                          ? "text-blue-600"
                          : "text-slate-600 hover:text-blue-600"
                      }`}
                    >
                      {navlink.title}
                    </span>
                  </Link>
                ) : (
                  <span
                    onClick={navlink.link}
                    className={`md:text-[16px] lg:text-[18px] font-[500] cursor-pointer ${
                      isActive("#") // You can adjust this logic if you need a specific path
                        ? "text-blue-600"
                        : "text-slate-600 hover:text-blue-600"
                    }`}
                  >
                    {navlink.title}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div
          className={`${
            open
              ? "top-0 opacity-100 transition-all duration-500 ease-in-out"
              : "max-h-0 opacity-0 transition-all duration-500 ease-in-out top-30"
          } shadow-sm pt-28 overflow-hidden flex flex-col text-center lg:hidden bg-white gap-4 absolute left-0 z-50 w-full p-6 mx-auto`}
        >
          <ul className="flex flex-col gap-[14px] lg:gap-[18px] items-center">
            {navlinks.map((navlink) => (
              <li key={navlink.id} className="cursor-pointer">
                {typeof navlink.link === "string" ? (
                  <Link to={navlink.link}>
                    <span
                      className={`text-[18px] font-[500] ${
                        isActive(navlink.link)
                          ? "text-blue-600"
                          : "text-slate-600"
                      }`}
                    >
                      {navlink.title}
                    </span>
                  </Link>
                ) : (
                  <span
                    onClick={navlink.link}
                    className={`text-[18px] font-[500] cursor-pointer ${
                      isActive("#") // Adjust if needed
                        ? "text-blue-600"
                        : "text-slate-600"
                    }`}
                  >
                    {navlink.title}
                  </span>
                )}
              </li>
            ))}
            <div className="flex items-center gap-[16px] md:gap-[18px]">
              <Link to="/">
                <PrimaryBtn className="bg-blue-600 hover:bg-blue-500 w-[120px]  h-[38px]  flex justify-center items-center text-[#fff] duration-500 transition">
                  Contact Us
                </PrimaryBtn>
              </Link>
            </div>
          </ul>
        </div>

        <div className="hidden lg:flex items-center gap-[16px] md:gap-[18px]">
          <Link to="/">
            <PrimaryBtn className="bg-blue-600 hover:bg-blue-500 w-[150px] h-[38px]  flex justify-center items-center text-[#fff] duration-500 transition">
              Contact Us
            </PrimaryBtn>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
