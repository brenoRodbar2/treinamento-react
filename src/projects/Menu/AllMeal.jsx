import { SingleMeal } from './SingleMeal';
import { useState } from "react";
import menu from "./data";
import { ToastContainer, toast } from "react-toastify";

const typesMeal = menu.map((x) => x.category);

const typeMeal = [...new Set(typesMeal)];

const AllMeal = () => {
  const [actualMeal, setActualMeal] = useState("All");
  console.log(actualMeal);

  const data = actualMeal === 'All' ? menu : menu.filter((x) => x.category === actualMeal)

  return (
    <div className="flex w-[90vw] flex-col items-center gap-8 m-auto">
      <ToastContainer  />
      <div className="w-fit flex flex-col h-fit items-center gap-2">
        <h1 className="font-bold text-3xl ">Our Menu</h1>
        <div className="border border-solid  border-indigo-500  w-[70%]"></div>
      </div>
      {/* OPTIONS BUTTONS */}
      <div className="flex gap-4">
        <button
          className="bg-indigo-500 px-6 py-1 rounded-md text-white text-xs font-medium"
          type="button"
          onClick={() => setActualMeal("All")}
        >
          All
        </button>

        {typeMeal.map((x) => (
          <button
            key={x}
            onClick={() => setActualMeal(x)}
            className="bg-indigo-500 px-6 text-xs  py-1 rounded-md text-white font-medium"
            type="button"
          >
            {x}
          </button>
        ))}

        <button onClick={() => toast.success("Olá! Esta é uma notificação!" )}>
          {" "}
          Test
        </button>
      </div>

      {/* Section */}
      <div className=" grid grid-cols-1 md:grid-cols-2 place-items-center lg:grid-cols-3 w-full ">
        {data.map((x) => {
          return <SingleMeal key={x.id} {...x} />;
        })}
      </div>
    </div>
  );
};

export default AllMeal;
