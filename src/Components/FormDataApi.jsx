
const FormDataApi = () => {

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)

    const newUser = Object.fromEntries(formData)
    console.log(newUser)
  }
  return (
    <form onSubmit={handleSubmit} className="p-8 bg-lime-200 rounded-xl flex flex-col">
      <h1 className="font-bold text-4xl ">Controlled Inputs</h1>
      <div className="flex flex-col gap-1 mt-4">
        <label className="" htmlFor="name">
          Name
        </label>
        <input
          id="name"
          type="text"
         
          name="name"
        />
      </div>

      <div className="flex flex-col gap-1 mt-4">
        <label className="" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          type="text"
         
          name="email"
        />
      </div>
      <div className="flex flex-col gap-1 mt-4">
        <label className="" htmlFor="password">
          Password
        </label>
        <div className="flex pr">
          <input
            className="w-full"
            id="password"
           
            name="password"
          />
          <button type="button">
            
          </button>
        </div>
      </div>
      <button
        type="submit"
        
        className="text-white bg-lime-950 p-0.5 mt-4 rounded-md"
      >
        Submit
      </button>
    </form>
  );
}

export default FormDataApi