import { useState, useEffect } from "react";




const FetchTeste = () => {
  const [usuarios, setUsuarios] = useState([]);
  
  const pegaUsuario = async () => {
    try {
      const response = await fetch("https://api.github.com/users")
      const data = await response.json()
      
      setUsuarios(data)
  
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    pegaUsuario()
  },[])



  return (
    <div className="flex flex-col gap-4">
      {usuarios.map((usuario) => {
        return (
      <div key={usuario.id} className="bg-white p-5 w-[400px] rounded-md flex">
        <img
          className="w-[50px] h-[50px] rounded-full ml-2"
          src={usuario.avatar_url}
          alt=""
        />
        <div className="ml-6">
          <p className="font-semibold text-2xl">{usuario.login}</p>
          <a
            className="text-[#ef959d]"
            href={usuario.html_url}
            target="_blank"
          >
            Perfil
          </a>
        </div>
      </div>
        )})}
    </div>
  );
};

export default FetchTeste;
