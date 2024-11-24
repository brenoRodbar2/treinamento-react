import { useState } from "react";






const Tour = (props) => {
  const [data, setData] = useState(props)
  const [show, setShow] = useState(false);
  const [naoInteressa, setNaoInteressa] = useState(false)
  
  const tamanhoText = data?.info?.length;

  if(naoInteressa) {
    return <div className=""></div>
  }

  return (
    <div className="flex relative  flex-col items-center  w-[250px] ">
      <img
        className=" w-[250px] h-[200px] object-cover"
        src={data?.image}
        alt=""
      />
      <span className="absolute right-0 top-0 text-sm p-1 bg-[#ef958d]">
        $ {data?.price}
      </span>

      <div className="flex flex-col gap-2 shadow-md p-4">
        <p className="font-semibold">{data?.name}</p>
        <div className="font-light text-slate-400 flex flex-col gap-4">
          {tamanhoText < 200 ? (
            data?.info
          ) : show ? (
            <div className="">
              {data?.info}{" "}
              <button
                className="inline-block text-[#ef958d] font-extrabold"
                onClick={() => setShow(!show)}
              >
                Recolher
              </button>
            </div>
          ) : (
            <div className="">
              {data?.info?.substring(0, 200)}...{" "}
              <button
                className="inline-block text-[#ef958d] font-extrabold"
                onClick={() => setShow(!show)}
              >
                Exibir mais
              </button>
            </div>
          )}
          <button
            type="button"
            onClick={() => {
              setNaoInteressa(!naoInteressa);
            }}
            className="p-2 bg-[#ef958d] text-white rounded-md"
          >
            Não me Interessa
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tour;
