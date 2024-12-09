import React, { useState } from 'react'
import Values from 'values.js';

const Form = () => {
const [color, setColor] = useState("#f15025");
const shades = new Values(color).all(10);
  return (
    <div className="min-h-screen min-w-full bg-stone-50">
      <form className="p-4 py-8 flex items-center gap-9">
        <label className=" text-gray-500 font-bold text-3xl">
          Color Generator
        </label>
        <div className=" flex ">
          <input type="color" name="color" id="" />
          <input className="" type="text" />
          <button
            className="bg-indigo-400 rounded-r-md px-2 text-white"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>


    </div>
  );
}

export default Form