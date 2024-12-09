import { nanoid } from 'nanoid'
import React, { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';

const Form = ({setData, data}) => {
  

  
  function handleData(e) {
    e.preventDefault()
    const value = e.target.elements["GroceryName"].value;

    data.some((item) => item.name === value)
      ? toast.error("Esta tarefa já foi criada. Tente outra tarefa")
      : setData([...data, { name: value, isCompleted: false }]);


  }

  return (
    
    <form onSubmit={handleData} className="w-full h-6 flex gap-3">
      <ToastContainer />
      <input name='GroceryName' className=" pl-2 bg-indigo-100 rounded-sm w-full h-full" type="text" />
      <button
        name='botao'
        className=" bg-indigo-600 rounded-md py-1 px-3  text-white font-medium text-[10px] flex justify-center whitespace-nowrap  h-full"
        type="submit"
      >
        Add Item
      </button>
    </form>
  );
}

export default Form