import React from "react";
export function UserCardControlledInput({ x }) {
  return (
    <div
      className="justify-between w-full flex bg-custom-gradient rounded-md py-2 px-4"
      key={x}
    >
      <h1 className="">{x.name}</h1>
      <span className="rounded-full bg-white w-6 h-6 flex justify-center items-center">
        {x.id}
      </span>
    </div>
  );
}
