import {MENU_TOP} from "../../data";

import React from "react";
import Logo from "components/Logo";
import {NavList, NavItem} from 'components/Nav';

import './Header.scss'

function Header() {
  return (
    <header className='header'>
      <div className='container'>
        <Logo />
        <NavList className='primary-menu'>
          {MENU_TOP.map((item, index) => (
            <NavItem key={item.id}>
              <a href={item.link} className={index === 0 ? 'active' : ''}>{item.title}</a>
            </NavItem>
          ))}
        </NavList>
      </div>
    </header>
  )
}

export default Header