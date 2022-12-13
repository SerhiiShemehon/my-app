import React from "react";

function Input({
  type,
  placeholder,
  handleChange
}) {
  let timeout;
  const changeInput = (event) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      handleChange(event.target.value)
    }, 1000);
  }

  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={changeInput}
    />
  )
}

export default Input;