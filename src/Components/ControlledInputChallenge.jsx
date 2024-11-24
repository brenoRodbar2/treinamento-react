import { UserCardControlledInput } from './UserCardControlledInput';
// import { data } from "../data";
import { useState } from "react";
import { data } from "../data";

const ControlledInputs = () => {
  const [name, setName] = useState("");
  const [users, setUsers] = useState(data);

  function handleAddUser(){
   
    const iDs = users.map((x) =>(x.id))
    const finalId = Math.max(...iDs ) + 1
    setUsers([...users, {id: finalId, name: name}])
  }
  
  return (
    <>
      <form className="p-8 bg-[#62f8d6] rounded-xl flex flex-col">
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

        <button onClick={handleAddUser} type='button' className="text-white bg-[#06765C] p-0.5 mt-4 rounded-md">
          Submit
        </button>
      </form>
      <div className="flex flex-col gap-3 mt-8 ">
        {users.map((x) => {
          return (
            <div key={x.id} className="flex gap-2 items-center">
              <UserCardControlledInput x={x} />
              <button
              onClick={() => (setUsers(users.filter((y) => (y.id != x.id))))}
                className="bg-red-600 w-6 h-6 rounded-[50px] flex justify-center items-center text-white"
                type="button"
              >
                x
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default ControlledInputs;

    
  