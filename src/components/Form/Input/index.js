import React from 'react';

function Input({handleChange, ...props}) {
  return (
    <input
      onChange={handleChange}
      {...props}
    />
  )
}

export default Input;