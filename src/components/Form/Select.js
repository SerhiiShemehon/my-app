import React from "react";

function Select({
  name,
  options,
  firstOption,
  handleChange
}) {
  const changeInput = (event) => {
    handleChange(event.target.value)
  }

  return (
    <select
      name={name}
      onChange={changeInput}
    >
      <option value='0'>{firstOption}</option>
      {options.map((item, index) => <option key={index} value={item}>{item}</option>)}
    </select>
  )
}

export default Select;