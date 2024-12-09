import { useState } from "react";
import { loremIpsum } from "../data";

const LoremIpsum = () => {

  const [qtd, setQtd] = useState(0)
  const data = loremIpsum.slice(0, qtd)
  
  function handleQtdParagraph(e) {
     e.preventDefault();
     const value = new FormData(e.target).get("qtd")
     setQtd(value)
     

  }

  return (
    <div className="flex flex-col gap-8 items-center">
      <div className="text-xl font-bold">TIRED OF BORING LOREMIPSUM?</div>
     
        <form onSubmit={handleQtdParagraph} className="flex gap-4 justify-center items-center">
          Paragraphs:{" "}
          <input
          
            className="bg-neutral-300 p-0.5 px-2 rounded-md"
            defaultValue={1}
            type="number"
            name="qtd"
            min={1}
            max={8}
          />
          <button  className=" p-0.5 px-2 rounded-md bg-emerald-200 font-medium" type="submit">
            Generate
          </button>
        </form>
      {data.map((x, id) => {
       return <p key={id}>{x}</p>
      })}
      
    </div>
  );
};

export default LoremIpsum;
