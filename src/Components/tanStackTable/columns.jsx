import { createColumnHelper } from "@tanstack/react-table";
import moment from "moment";

const columnHelpler = createColumnHelper();

export const columnDef = [
  columnHelpler.accessor("Id", {
    header: "Id",
    // cell: ({getValue}) => <span>{getValue()}</span>
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
    cell:( { getValue }) => (getValue() * 100).toFixed(2) + '%',
  }),
];
