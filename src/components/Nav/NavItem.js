import React from "react";
import { NavLink } from "react-router-dom";

function NavItem({title, link, className, Icon}) {
  return (
    <li className="nav-item">
      <NavLink to={link} className={className}>
        {Icon ? <Icon /> : null}
        {title}
      </NavLink>
    </li>
  )
}

export default NavItem