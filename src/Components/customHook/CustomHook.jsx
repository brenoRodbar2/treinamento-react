import useToggle from "./useToggle";

const CustomHook = () => {
  const {show,toggle} = useToggle(true)
  return (
    <div className="flex w-fit m-auto  flex-col items-center mt-40">
      <h4 className="text-2xl font-semibold text-gray-600">
        toggle custom hook
      </h4>
      <button
        className="bg-indigo-500 hover:bg-indigo-400 my-4 py-1 w-[40%] rounded-md text-white"
        onClick={toggle}
      >
        toggle
      </button>
      {show && <h4 className="text-red-600">some stuff</h4>}
    </div>
  );
};
export default CustomHook;
