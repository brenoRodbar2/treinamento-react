import { useState } from "react";

const ControlledInputs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  console.log(name)
  return (
    <form className="p-8 bg-lime-200 rounded-xl flex flex-col">
      <h1 className="font-bold text-4xl ">Controlled Inputs</h1>
      <div className="flex flex-col gap-1 mt-4">
        <label className="" htmlFor="name">
          Name
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-1 mt-4">
        <label className="" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button className="text-white bg-lime-950 p-0.5 mt-4 rounded-md">
        Submit
      </button>
    </form>
  );
};
export default ControlledInputs;
