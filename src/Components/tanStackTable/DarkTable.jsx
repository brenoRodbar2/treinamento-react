import {
  getCoreRowModel,
  useReactTable,
  createColumnHelper,
  flexRender,
  getFilteredRowModel,
} from "@tanstack/react-table";
import DATA from "./MOCK_DATA.json";
import { useState } from "react";

import { FaSort } from "react-icons/fa";

import moment from "moment";
import EditableCell from "./EditableCell";
import DropDownMenu from "./DropDownMenu";
import DateCell from "./DateCell";
import FilterInput from "./FilterInput";

const columnHelper = createColumnHelper();

const columnDef = [
  columnHelper.accessor("Id", {
    header: "Id",

    cell: ({ getValue }) => <span className="font-semibold">{getValue()}</span>,
  }),
  columnHelper.accessor("Name", {
    header: "Name",
    cell: EditableCell,
  }),
  columnHelper.accessor("Field", {
    header: "Field",
    cell: DropDownMenu,
  }),
  columnHelper.accessor("Discipline", {
    header: "Discipline",
  }),
  columnHelper.accessor("Role", {
    header: "Role",
  }),
  columnHelper.accessor("Montly", {
    header: "Montly",
    cell: DateCell,
  }),
  columnHelper.accessor("Percent", {
    header: "Percent",
    cell: ({ getValue }) => (getValue() * 100).toFixed(2) + "%",
  }),
];

const DarkTable = () => {
  
  // USE STATES
  const [columnFilters, setcolumnFilters] = useState([
    {
      id: 'Name', value: ''
    }
  ])
  const [data, setData] = useState(DATA);

  // TABLE INSTANCE
  const tableInstance = useReactTable({
    data: data,
    columns: columnDef,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel:getFilteredRowModel(),
    columnResizeMode: "onChange",
    state: {
      columnFilters
    },
    meta: {
      updateData: (rowIndex, columnId, value) =>
        setData((prev) =>
          prev.map((row, index) =>
            index === rowIndex
              ? {
                  ...prev[rowIndex],
                  [columnId]:value,
                }
              : row
          )
        ),
    },
  });



  return (
    <div
      className="text-gray-300 text-sm"
      // style={{ height: tableInstance.getTotalSize() }}
    >
      <FilterInput columnFilters={columnFilters } setcolumnFilters={setcolumnFilters} />
      <table className="border-collapse border-gray-500  border-[0.10px] ">
        <thead>
          {tableInstance.getHeaderGroups().map((headerGroup) => {
            return (
              <tr className="h-10" key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <th
                    style={{width: header.getSize()}}
                      className=" border-gray-500  border-[0.10px]  relative group"
                      // style={{ width: header.getSize() }}
                      key={header.id}
                    >
                      {header.column.columnDef.header}

                      <button className=" ml-2 relative h-full " type="button">
                        <FaSort className="text-xs  absolute -top-3" />
                      </button>
                      <div
                        onMouseDown={header.getResizeHandler()}
                        onTouchStart={header.getResizeHandler()}
                        className={`absolute opacity-0 h-10  group-hover:opacity-100 top-0 right-0  w-[5px] ${
                          header.column.getIsResizing()
                            ? "bg-[#42f58a] opacity-100"
                            : "bg-indigo-500"
                        } cursor-col-resize touch-none select-none`}
                      ></div>
                    </th>
                  );
                })}
              </tr>
            );
          })}
        </thead>
        <tbody>
          {tableInstance.getRowModel().rows.map((row) => {
            return (
              <tr key={row.id} className="h-10">
                {row.getVisibleCells().map((cell) => {
                  return (
                    <td
                      className="border-gray-700 pl-2.5 border"
                      style={{ width: cell.column.getSize() }}
                      key={cell.id}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
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

export default DarkTable;
