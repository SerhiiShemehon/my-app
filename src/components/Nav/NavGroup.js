import React from "react";
import './Nav.scss';

function NavGroup({title, children}) {
  return (
    <div className='nav-group'>
      {title && <h3 className='title-group'>{title}</h3>}
      {children}
    </div>
  )
}

export default NavGroup