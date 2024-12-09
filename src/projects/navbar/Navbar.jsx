import React, { useEffect, useRef, useState } from "react";
import {
  FaTwitter,
  FaLinkedin,
  FaFacebook,
  FaInstagramSquare,
  FaAlignJustify,
} from "react-icons/fa";

const Navbar = () => {
  const refContainer = useRef(null)
  const [isClicked, setIsClicked] = useState(false)

  useEffect(() => {
    console.log(refContainer)
  })

  function handleIsClicked() {
    setIsClicked(!isClicked)
  }

  function handleOpenNav() {
    if (refContainer.current) {
      if (refContainer.current.style.display === 'none') {
        refContainer.current.style.display = "block";
      }else {
        refContainer.current.style.display = "none";
      }
        ;
    }
  }

  return (
    <header className="px-8 lg:px-32  lg:flex lg:items-center lg:justify-between py-5 shadow-centered">
      {/* LOGO */}
      <div className="flex items-center justify-between">
        <a className="font-semibold text-xl " href="#">
          <span className=" bg-red-400 px-1 py-0.5 rounded-md text-white ">
            Coding
          </span>{" "}
          <span className="font-light text-indigo-500">Addict</span>
        </a>
        <button className="" onClick={handleIsClicked} type="button">
          <FaAlignJustify className="text-indigo-500 transform hover:rotate-180 transition duration-300 ease-in-out lg:hidden" />
        </button>
      </div>

      {/* LINKS DE NAVEGAÇAO */}
      {/* <nav ref={refContainer} className="mt-7 hidden lg:m-0 lg:block"> */}

      <nav
        ref={refContainer}
        className={` transition-all duration-300 ease-in-out flex flex-col lg:m-0 mt-6 md:block lg:h-fit h-fit lg:flex-row gap-2 font-medium text-gray-700 overflow-hidden ${
          isClicked ? "max-h-[500px]" : "max-h-0 lg:max-h-full"
        }`}
      >
        {/* <nav ref={refContainer} className="mt-7 h-0 overflow-hidden lg:m-0 lg:"> */}
        <ul className="flex flex-col  lg:flex-row gap-2 font-medium text-gray-700">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Profile</a>
          </li>
        </ul>
      </nav>

      <nav className="hidden lg:block">
        <ul className="flex gap-2 font-medium">
          <li>
            <a href="#">
              <FaInstagramSquare color="#6366F1" />
            </a>
          </li>
          <li>
            <a href="#">
              <FaFacebook color="#6366F1" />
            </a>
          </li>
          <li>
            <a href="#">
              {" "}
              <FaLinkedin color="#6366F1" />
            </a>
          </li>
          <li>
            <a href="#">
              <FaTwitter color="#6366F1" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
