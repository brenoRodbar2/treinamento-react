// import "./table.css"
import { FaSort } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import {
  useReactTable,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  ColumnFiltering,
} from "@tanstack/react-table";
import dataJSON from "./MOCK_DATA.json";
import { useMemo, useState } from "react";
import { createColumnHelper } from "@tanstack/react-table";
import moment from "moment";

import Filter from "./FilterFunction";

const columnHelpler = createColumnHelper();

const columnDef = [
  columnHelpler.accessor("Id", {
    header: "Id",
    cell: ({ getValue }) => <span className="font-semibold">{getValue()}</span>,
  }),
  columnHelpler.accessor("Name", {
    header: "NameFN",
  }),
  columnHelpler.accessor("Field", {
    header: "Field",
  }),
  columnHelpler.accessor("Discipline", {
    header: "Discipline",
  }),
  columnHelpler.accessor("Role", {
    header: "Role",
  }),
  columnHelpler.accessor("Montly", {
    header: "Montly",
    cell: ({ getValue }) => moment(new Date(getValue())).format("MMM  YY"),
  }),
  columnHelpler.accessor("Percent", {
    header: "Percent",
    cell: ({ getValue }) => (getValue() * 100).toFixed(2) + "%",
  }),
];

const ColunaFiltering = () => {
  const finalData = useMemo(() => dataJSON, []);
  const filnalColumnDef = useMemo(() => columnDef, []);

  const [sorting, setSorting] = useState([]);

  const [filtering, setFiltering] = useState("");
  const [columnFilters, setColumnFilters] = useState([])

  const tableInstance = useReactTable({
    columns: filnalColumnDef,
    data: finalData,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),

    state: {
      sorting: sorting,
      globalFilter: filtering,
      columnFilters: columnFilters,
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setFiltering,
    onColumnFiltersChange: setColumnFilters,
    enableSortingRemoval: false,
  });

  return (
    <div className="m-auto w-fit mt-20">
      <form className="focus-within:ring-indigo-400 focus-within:ring-2 rounded-md mb-6 bg-gray-100 w-[20%] h-7 flex px-2">
        <input
          value={filtering}
          className="bg-transparent w-full outline-none "
          onChange={(e) => setFiltering(e.target.value)}
          type="text"
        />
        <button type="submit">
          <FaSearch className="text-gray-500" />
        </button>
      </form>
      <table className="  border-collapse ">
        <thead className="  ">
          {tableInstance.getHeaderGroups().map((headerElement) => {
            return (
              <tr
                className="px-2 py-3  rounded-lg  gap-4"
                key={headerElement.id}
              >
                {headerElement.headers.map((columnElement) => {
                  return (
                    <th
                      className="first: first:rounded-l-lg leading-none last:rounded-r-lg font-medium py-3 text-start bg-[#F6F7FA] text-sm px-10 text-gray-500 "
                      key={columnElement.id}
                      colSpan={columnElement.colSpan}
                    >
                      {flexRender(
                        columnElement.column.columnDef.header,
                        columnElement.getContext()
                      )}

                      <div className="">
                        <Filter column={columnElement.column} table={tableInstance}/>
                      </div>

                      <button
                        className=" ml-2 relative h-full "
                        onClick={columnElement.column.getToggleSortingHandler()}
                        type="button"
                      >
                        <FaSort className="absolute -top-3" />
                      </button>
                    </th>
                  );
                })}
              </tr>
            );
          })}
        </thead>
        <tbody>
          {tableInstance.getRowModel().rows.map((rowElement) => {
            return (
              <tr className="" key={rowElement.id}>
                {rowElement.getVisibleCells().map((cellElement) => {
                  return (
                    <td
                      className="text-center border-b-2 py-3"
                      key={cellElement.id}
                    >
                      {flexRender(
                        cellElement.column.columnDef.cell,
                        cellElement.getContext()
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ColunaFiltering;
