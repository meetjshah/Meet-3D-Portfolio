import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close, linkedin } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex '>
            Meet &nbsp;
            <span className='sm:block hidden'> | &nbsp;Portfolio</span>
          </p>
        </Link>

        {/* <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open("https://www.linkedin.com/in/meetshah1997/", "_blank")}
              className='black-gradient w-12 h-12 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={linkedin}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div> */}

        <ul className='list-none hidden sm:flex flex-row gap-10'>
        {/* <a className="text-secondary hover:text-white text-[18px] font-medium cursor-pointer" href="Meet_Shah_Resume.pdf" download={"Meet_Shah_Resume.pdf"}>Resume</a>   */}
        <a className="text-secondary hover:text-white text-[18px] font-medium cursor-pointer" onClick={() => window.open("https://www.linkedin.com/in/meetshah1997/", "_blank")}>LinkedIn</a>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
        {/* <a className="mr-5 text-secondary hover:text-white text-[18px] font-medium cursor-pointer" href="Meet_Shah_Resume.pdf" download={"Meet_Shah_Resume.pdf"}>Resume</a> */}
        <a className="mr-5 text-secondary hover:text-white text-[18px] font-medium cursor-pointer" href="https://www.linkedin.com/in/meetshah1997/">LinkedIn</a>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
