import React from "react";
export function SingleMeal({img, desc, title}) {
  return (
    <div className="flex flex-col gap-4 items-center h-fit max-w-[25rem] bg-slate-300 m-4">
      <img
        className="w-full h-[15rem]  object-cover"
        src={img}
        alt=""
      />
      <div className="px-6 pb-6 ">
        <p className="font-bold text-indigo-500 mb-4 capitalize">
          {title}
        </p>
        <p className="font-light">{desc}</p>
      </div>
    </div>
  );
}
  