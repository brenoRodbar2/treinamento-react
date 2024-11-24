import { useState } from "react";
import IconEyes from "./IconEyes";

const MultipleInputs = () => {

  const [isHidden, setIsHidden] = useState(true)
  
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  function handleChange(e) {
    
    setUser({...user, [e.target.name]: e.target.value})
  }

  function handleSubmit(e){
    e.preventDefault()
    console.log(user)
  }

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
          value={user.name}
          onChange={handleChange}
          name="name"
        />
      </div>

      <div className="flex flex-col gap-1 mt-4">
        <label className="" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          type="text"
          value={user.email}
          onChange={handleChange}
          name="email"
        />
      </div>
      <div className="flex flex-col gap-1 mt-4">
        <label className="" htmlFor="password">
          Password
        </label>
        <div className="flex pr">
          <input
          className="w-full"
            id="password"
            type={isHidden ? 'password' : 'text'}
            value={user.password}
            onChange={handleChange}
            name="password"
            />
          <button type='button' onClick={() => (setIsHidden(!isHidden))}>
            <IconEyes isOpen={isHidden} />
          </button>
        </div>
      </div>
      <button type="submit" onClick={handleSubmit} className="text-white bg-lime-950 p-0.5 mt-4 rounded-md">
        Submit
      </button>
    </form>
  );
};
export default MultipleInputs;



