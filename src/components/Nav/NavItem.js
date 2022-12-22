import React from "react";
import { NavLink } from "react-router-dom";

function NavItem({title, link, className, icon}) {
  return (
    <li className="nav-item">
      <NavLink to={link} className={className}>
        {icon ? <img src={icon} alt={title} /> : null}
        {title}
      </NavLink>
    </li>
  )
}

export default NavItem