
import  { useState } from 'react'
const ChallengeBoolean = () => {
  
  
  const [estaLogado, setEstaLogado] = useState(false)
  
  return (
    <div className=" flex flex-col items-center gap-4">
      {estaLogado ? "Esta Conectado!" : "Entre, por favor"}
      <button
        onClick={() => setEstaLogado(!estaLogado)}
        type="button"
        className="bg-[#ef959d] px-4 py-2 text-white rounded"
      >
        {estaLogado ? "Loggout!" : "Loggin"}
      </button>
    </div>
  );
}

export default ChallengeBoolean