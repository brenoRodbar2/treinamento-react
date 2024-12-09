import React, { useEffect, useRef, useState } from 'react'

const UseReffExample = () => {
  const [value, setValue] = useState('')
  const refContainer = useRef(null)

  useEffect(() => console.log(refContainer))

  console.log(refContainer)
  
  function handleSubmit(e) {
    e.preventDefault();
    const name = e.target.elements.name.value
    console.log(name)
    setValue(name)
  }
  return (
    <div className="flex flex-col items-center gap-8">
      <form
        onSubmit={handleSubmit}
        className="w-[50vw] bg-white m-auto shadow-centered p-10 flex flex-col"
        action=""
      >
        <label className="font-semibold text-lg" htmlFor="">
          Name
        </label>
        <input ref={refContainer} name='name' type="text" className="bg-indigo-100 rounded-sm h-7" />
        <button

          className="mt-6 bg-indigo-600 w-[20%] m-auto py-2 rounded-md text-white font-semibold "
          type="submit"
        >
          Submit
        </button>
      </form>

      <h1> VALUE: {value}</h1>
    </div>
  );
}

export default UseReffExample