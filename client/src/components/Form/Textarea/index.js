import React from 'react';

function Textarea({handleChange, ...props}) {
  return (
    <textarea
      onChange={handleChange}
      {...props}
    />
  )
}

export default Textarea;