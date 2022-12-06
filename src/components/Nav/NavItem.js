import React from "react";

function NavItem({children}) {
  return (
    <li className="nav-item">
      {children}
    </li>
  )
}

export default NavItem