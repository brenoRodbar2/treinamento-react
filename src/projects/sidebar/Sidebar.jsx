import React from "react";
import { useGlobalContext } from "./context";
import { FcCancel } from "react-icons/fc";
import {
  links,
  social,
} from "c:/Users/brb95/projetos/React/treinamento-js/src/projects/sidebar/data";

const Sidebar = () => {
  const { setIsSidebarOpen, setIsModalOpen, isModalOpen, isSidebarOpen } =
    useGlobalContext();
  console.log(isSidebarOpen)
  return (
    <div
      className={`${
        !isSidebarOpen ? "transform -translate-x-full" : ""
      } w-screen md:w-[30rem]  p-6
        bg-white h-[100dvh]  transition-all duration-300 ease-in-out z-10 relative`}
    >
      <div className="">
        <div className="flex justify-between items-center">
          <span className="font-bold  flex items-center justify-center text-white ring-[0.6px] ring-sky-400 ring-offset-2  text-xl w-10 h-10 rounded-full bg-sky-400 leading-none transition-all duration-300 ease-in-out hover:bg-sky-200 ">
            R
          </span>
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            type="button"
          >
            <FcCancel className="h-7 w-7" />
          </button>
        </div>
        <ul className="flex flex-col gap-3 mt-8">
          {links.map((x) => {
            const { id, url, text, icon } = x;
            return (
              <li className="" key={id}>
                <a className="flex justify-start gap-2 items-center" href={url}>
                  {icon}
                  {text}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
