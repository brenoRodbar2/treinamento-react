
import Plus from "./Plus";
import Minus from "./Minus";

const Acordion = ({title, info}) => {
  const [show, setShow] = useState(false);
  return (
    <div className="">
      <div className="shadow-centered p-4 ">
        <div className="flex justify-between items-center">
          <p className="font-semibold">{title}</p>
          <button type='button' onClick={() => setShow(!show)}>{show ? <Minus /> : <Plus />}</button>
        </div>

       {show && <p className="font-light mt-4">{info}</p>}
      </div>
    </div>
  );
};

export default Acordion;
