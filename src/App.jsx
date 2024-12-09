import DatePicker from "react-datepicker"
import ColunaFiltering from "./components/tanStackTable/ColumnFiltering"
import DarkTable from "./components/tanStackTable/DarkTable"
import DropDownMenu from "./components/tanStackTable/DropDownMenu"
import FilterInput from "./components/tanStackTable/FilterInput"
const App = () => {
  return (
    <div className=" bg-gray-900 flex pt-32 items-center flex-col min-h-dvh gap-28">
      <DarkTable/>
      
    </div>
  )
}

export default App