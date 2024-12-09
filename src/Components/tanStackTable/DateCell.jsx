import { forwardRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt } from "react-icons/fa";

const DateCustomInput = forwardRef(({ value, onClick, clearDate }, ref) => {
  return (
    <div className="" ref={ref} onClick={onClick} style={{ cursor: "pointer" }}>
     {value}
    </div>
  );
});

const DateCell = ({ getValue, row, column, table }) => {
  const date = getValue();
  const { updateData } = table.options.meta;
  return (
    <DatePicker
    
      wrapperClassName="date-wrapper"
      dateFormat="yyyy MM"
      selected={date}
      onChange={(date) => updateData(row.index, column.id, date)}
      showMonthYearPicker={true}
      customInput={<DateCustomInput />}
    />
  );
};

export default DateCell;
