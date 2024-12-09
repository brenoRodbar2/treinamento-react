import React, { useState } from "react";
import Form from "./Form";
import SingleGrocery from "./SingleGrocery";
import { nanoid } from "nanoid";

const Groserys = () => {
  const [data, setData] = useState([
    
  ]);
  console.log(data);

  return (
    <div className="gap-4 w-[30rem] bg-white m-auto p-6 flex items-center shadow-centered rounded-md font-bold flex-col">
      <h1 className=" font-bold">FGaswe fsda</h1>
      {/* Form */}
      <Form setData={setData} data={data} />
      {/* Grocerys */}

      {/* <SingleGrocery isFinalized={false} name={data[0].name}/> */}

      {data.map((x) => {

        const id = nanoid()
        return (
          <SingleGrocery
            
            key={id}
            isFinalized={x.isCompleted}
            setData={setData}
            data={data}
            name={x.name}
          />
        );
      })}
    </div>
  );
};

export default Groserys;
