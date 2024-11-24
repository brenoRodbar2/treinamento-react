import { useState } from "react"

const BooleanTest = () => {
  const [state, setState] = useState(true)

  return (
    <div className="flex items-center justify-center flex-col">
      {state && <p>Agora voce vê o Elemento</p>}

      <button onClick={() => setState(!state)} className="p-2 rounded-lg text-white bg-[#ef959d]">Click me</button>
    </div>
  );
}

export default BooleanTest