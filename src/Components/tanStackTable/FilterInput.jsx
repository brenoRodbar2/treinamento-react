import React from "react";
import { FaSearch } from "react-icons/fa";

const FilterInput = ({ columnFilters, setcolumnFilters }) => {
  const EName = columnFilters.find((f) => f.id === "Name")?.value || "";
  const onFilterChange = (id, value) =>
    setcolumnFilters((prev) =>
      prev
        .filter((f) => f.id !== id)
        .concat({
          id,
          value,
        })
    );

    console.log('test',columnFilters)

  return (
    <div className="mb-4  focus-within:ring-indigo-400 focus-within:ring-2  flex items-center bg-[#202633] p-2 rounded-md justify-center text-white w-1/6">
      <input
        className="w-full bg-transparent  focus:outline-none"
        type="text"
        value={EName}
        onChange={(e) => onFilterChange("Name", e.target.value)}
        // onChange={(e) => setcolumnFilters([{id: 'Name', value: e.target.value}])}
      />
      <FaSearch className="text-gray-500 text-lg" />
    </div>
  );
};

export default FilterInput;
