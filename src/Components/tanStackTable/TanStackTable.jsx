// import "./table.css"

import {
  useReactTable,
  flexRender,
  getCoreRowModel,
} from "@tanstack/react-table";
import { columnDef } from "./columns";
import dataJSON from "./MOCK_DATA.json";
import { useMemo } from "react";


const TanStackTable = () => {
  const finalData = useMemo(() => dataJSON, []);
  const filnalColumnDef = useMemo(() => columnDef, []);


  const tableInstance = useReactTable({
    columns: filnalColumnDef,
    data: finalData,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <table className="m-auto   mt-20 border-collapse ">
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
                    className="first: first:rounded-l-lg last:rounded-r-lg font-medium py-3 text-start bg-[#F6F7FA] text-sm px-10 text-gray-500 "
                    key={columnElement.id}
                    colSpan={columnElement.colSpan}
                  >
                    {flexRender(
                      columnElement.column.columnDef.header,
                      columnElement.getContext()
                    )}
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
            <tr key={rowElement.id}>
              {rowElement.getVisibleCells().map((cellElement) => {
                return (
                  <td className="text-center border-b-2 py-3 " key={cellElement.id}>
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
  );
};

export default TanStackTable;
