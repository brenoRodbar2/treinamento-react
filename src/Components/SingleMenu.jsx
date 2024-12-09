import React from "react";
export function SingleMenu({}) {
  return <div className="flex flex-col gap-4 items-center max-w-[25rem] bg-white">
            <img className="w-full h-[15rem]  object-cover" src={menu[0].img} alt="" />
            <div className="px-6 pb-6 ">
              <p className="font-bold text-indigo-500 mb-4 capitalize">
              
                {menu[0].title}
              </p>
              <p className="font-light">
                {menu[0].desc}
              </p>
            </div>

          </div>;
}
  