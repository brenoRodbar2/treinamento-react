import React from "react";

const SingleGrocery = ({ setData, name, isFinalized, data }) => {

  function handleIsCompleted(e){
    if (e.target.checked) {
      const newObject = data.map((x) =>
        x.name === name ? { ...x, isCompleted: true } : x
      );
      setData(newObject)
    }else {
      const newObject = data.map((x) =>
        x.name === name ? { ...x, isCompleted: false } : x
      );
      setData(newObject)
    }
  }

  function handleDelet() {
    const fileterData = data.filter((x) => x.name != name);
    setData(fileterData);
  }
  return (
    <form className=" w-full flex justify-between">
      <div className="flex items-center gap-3">
        <input
          onChange={handleIsCompleted}
          name="isCompleted"
          className=""
          type="checkbox"
          checked={isFinalized}
        />
        <label
          className="font-medium text-sm"
          style={{ textDecoration: isFinalized ? "line-through" : "" }}
          htmlFor=""
        >
          {name}
        </label>
      </div>
      <button
        onClick={handleDelet}
        name="Delete"
        className="font-medium  text-sm"
        type="button"
      >
        Delete
      </button>
    </form>
  );
};

export default SingleGrocery;
