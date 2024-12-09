import React, { useEffect, useState } from 'react'

const EditableCell = ({getValue, row, column, table}) => {
  const initialValue = getValue()
  const [value, setValue] = useState(initialValue)
  const onBlur = () => {
    table.options.meta?.updateData(
      row.index,
      column.id,
      value
    )
  }

  useEffect(() => {
    setValue(initialValue)
  }, [initialValue])

  return (
    <div className="pr-2.5">
      <input
        className="focus:pl-3 h-8 focus:ring-indigo-400 focus:ring-[2px] rounded-sm bg-transparent w-full outline-none  transition-all duration-300"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onBlur={onBlur}
      />
    </div>
  );
}

export default EditableCell