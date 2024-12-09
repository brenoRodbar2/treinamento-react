import React, { useEffect, useState , useRef} from "react";
import { FaAngleDown } from "react-icons/fa";
import { usePopper } from "react-popper";


const DropDownMenu = ({
  getValue = () => "",
  row = {},
  column = {},
  table = {},
}) => {
  const firstValue = getValue();
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState(firstValue);
   let menuRef = useRef()

  useEffect(() => {
    let handler = (e) => {

      if(!menuRef.current.contains(e.target)) {

        setIsOpen(false)
      }

    }
    document.addEventListener("mousedown", handler)
return() => {
  document.removeEventListener("mousedown", handler);
}

  })



  const option = [
    { title: "On Shore", color: "#4f46e5" },
    { title: "Off Shore", color: "#15834c" },
  ];

  const [referenceElement, setreferenceElement] = useState();
  const [propperElement, setpropperElement] = useState();

  function onClicked(actualValue) {
    table.options.meta?.updateData(row.index, column.id, actualValue);
  }

  const color = value === "On Shore" ? "#4f46e5" : "#15834c";

  const { styles, attributes } = usePopper(referenceElement, propperElement, {
    placement: "bottom-start",
  });
  return (
    <div ref={setreferenceElement} className="relative min-w-[170px] h-8">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="text-white flex items-center justify-center"
      >
        <div
          style={{ backgroundColor: color }}
          className="flex justify-center items-center px-4 py-2 rounded-md leading-none"
        >
          {value}
        </div>
        <button onClick={() => setIsOpen(!isOpen)}>
          <FaAngleDown className=" ml-5" />
        </button>
      </div>
      {/* DropDown */}

      {isOpen && (
        <div ref={menuRef} className="">
          <div
            style={styles.popper}
            {...attributes}
            ref={setpropperElement}
            className=" absolute z-[20] w-[15rem] mt-4 ml-10   rounded-lg bg-[#202633]"
          >
            {option.map((item) => {
              return (
                <div
                  key={item.title}
                  type="button"
                  onClick={() => {
                    setValue(item.title);
                    setIsOpen(!isOpen);
                    onClicked(item.title);
                  }}
                  className={`text-white block p-4  hover:bg-[#313a4e] w-full  leading-none`}
                >
                  {" "}
                  {item.title}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropDownMenu;
