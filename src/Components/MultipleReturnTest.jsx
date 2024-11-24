import { useState, useEffect } from "react";
import LoadingAnimation from "./LoadingAnimation";

const MultipleReturnTest = () => {
  const url = "https://api.github.com/users/QuincyLarson";
  const [perfil, setPerfil] = useState({});
  const [isCarregado, setIsCarregado] = useState(false);
  const [isError, setIsError] = useState(false);

  console.log(perfil)

  const buscasrDados = async () => {
    try {
      const resp = await fetch(url);
      const respOk = resp.ok;
      if (!respOk) {
        setIsError(true);
        
        return
      }
      const respJson = await resp.json();
      setPerfil(respJson);
    } catch (error) {
      setIsError(true);
      console.log(error);
    }
    setIsCarregado(true);
    
  };

  useEffect(() => {
    setTimeout(() => {
      buscasrDados();
    }, 3000);
  }, []);

  console.log(isError);

  

  if (isError) {
    return <p>Deu Ruim!!</p>;
  }

  if (isCarregado) {
    return (
      <div className="flex flex-col items-center justify-center">
        <img
          className="w-[200px] h-[200px] rounded-xl"
          src={perfil.avatar_url}
          alt=""
        />
        <p className="text-[#ef959d] mb-4">{perfil.login}</p>
        <p className="text-[#b6b6b6] font-thin">Works at {perfil.company}</p>
        <p className="text-[#b6b6b6] font-bold">{perfil.bio}</p>
      </div>
    );
  }


  return <LoadingAnimation />;
};

export default MultipleReturnTest;
