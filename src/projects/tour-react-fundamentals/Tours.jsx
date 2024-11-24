import { useEffect, useState } from "react";
import LoadingAnimation from "../../components/LoadingAnimation";
import Tour from "./Tour";

const Tours = () => {
  const url = "https://www.course-api.com/react-tours-project";
  const [isError, setIsError] = useState(false)
  const [data, setData] = useState()
  const [isLoad, setIsLoad] = useState(false)

  async function pegaDados() {
    try {
      const resp = await fetch(url);
      if (!resp.ok) {
        setIsError(!isError)
        setIsLoad(!isLoad);
        return
      }

      const data = await resp.json()
      setData(data)
      setIsLoad(!isLoad)
      console.log(data)

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    pegaDados()
  }, [])

  if (isError) {
    return "Deu Ruim!!"
  }
  if (!isLoad) {
    return <LoadingAnimation/>
  }
  return (
    <div className="flex gap-4 flex-wrap">
      {data.map((iten) =>{
        return (
          <Tour key={iten.id} {...iten}/>
        )
      } )}
    </div>
  )
};

export default Tours;
