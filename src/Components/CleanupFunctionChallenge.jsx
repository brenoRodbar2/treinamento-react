import  {  useState } from 'react'
import SecondComponent from './SecondComponent'

const CleanupFunctionChallenge = () => {
  const [state, setState] = useState(false)

  

  return (
    <div className="">
      {state && <SecondComponent />}
      <button
        className="bg-[#ef959d] px-4 py-2 text-white rounded"
        onClick={() => setState(!state)}
        type="button"
      >
        Click me
      </button>
    </div>
  );
}


export default CleanupFunctionChallenge