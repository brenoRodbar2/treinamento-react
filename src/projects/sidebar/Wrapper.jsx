import React from "react";
export function Wrapper({
  setIsSidebarOpen,
  setIsModalOpen,
  isModalOpen,
  isSidebarOpen
}) {
  return <> const {(setIsSidebarOpen, setIsModalOpen, isModalOpen, isSidebarOpen)} =
    useGlobalContext();
  return (
    <div className="h-[100dvh] bg-gray-100 flex  relative">
      <div className="">
        <div className="flex">
          <Sidebar />
          <button type="button" onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="ml-8 mt-8">
            <FaAlignJustify className="h-8 w-8 fixed top-10 left-10" />
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center w-full h-full relative">
        <button onClick={() => setIsModalOpen(!isModalOpen)} className="bg-sky-400 px-3 py-1 rounded-md text-white " type="button">
          Show Modal
        </button>
      </div>
      {isModalOpen && <Modal />}
    </div></>;
}
  