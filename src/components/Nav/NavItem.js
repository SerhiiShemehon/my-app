import React from "react";
import { NavLink } from "react-router-dom";

function NavItem({title, link, className}) {
  return (
    <li className="nav-item">
      <NavLink to={link} className={className}>{title}</NavLink>
    </li>
  )
}

export default NavItem