import  { useState } from "react";
const frameworks = ["react", "angular", "vue", "svelte"];

const OthersInputs = () => {
  const [shipping, setShipping] = useState(false);
  const [framework, setFramework] = useState("react");

  function handleShipping(e) {
    setShipping(e.target.checked);
  }

  function handleFramework(e) {
    setFramework(e.target.value);
  }

  return (
    <form className="w-[500px] shadow-centered p-4  rounded-lg flex flex-col gap-6">
      <h2 className="font-semibold text-2xl text-gray-500 self-center">
        Other Inputs
      </h2>

      <div className="flex gap-4 items-center">
        <label className="" htmlFor="shipping">
          Free Shipping
        </label>
        <input
          type="checkbox"
          name="shipping"
          id="shipping"
          checked={shipping}
          onChange={handleShipping}
        />
      </div>

      <div className="flex gap-4 items-center">
        <label htmlFor="shipping">Framework</label>
        <select value={framework} name="framework" id="framework"  onChange={handleFramework}>
          {frameworks.map((framework) => {
            return (
              <option key={framework}>
                {framework}
              </option>
            );
          })}
        </select>
      </div>

      <button
        className="py-1 text-sm bg-emerald-200 rounded-xl mx-4 font-semibold"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default OthersInputs;
