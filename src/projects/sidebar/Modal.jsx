import React from "react";
import { useGlobalContext } from "./context";

const Modal = () => {
   const { setIsSidebarOpen, setIsModalOpen, isModalOpen, isSidebarOpen } =
    useGlobalContext();
  return (
    <div className="h-[100dvh] w-[100dvw] bg-[rgb(3,3,3,30%)] absolute z-20  flex items-center justify-center">
      <div className="shadow-centered rounded-md w-[50%] h-[30%] relative bg-white flex items-center justify-center text-2xl font-bold ">
        <button type="button" onClick={() => setIsModalOpen(!isModalOpen)}>
          <span className="absolute top-4 right-6 flex rounded-full bg-red-600 w-8 text-white h-8 justify-center items-center">
            X
          </span>
        </button>
        Modal Content
      </div>
    </div>
  );
};

export default Modal;
