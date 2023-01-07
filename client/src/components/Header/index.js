import React from 'react';
import Logo from 'components/Logo';
import {NavList, NavItem} from 'components/Nav';
import UserMenu from "components/UserMenu";

import {MENU_TOP} from 'data';

import './Header.scss'

function Header() {
  return (
    <header className={'header'}>
      <div className={'container container-big'}>
        <Logo />
        <div className={'header-nav'}>
          <NavList className={'primary-menu'}>
            {MENU_TOP.map((item, index) => (
              <NavItem key={item.id} title={item.title} link={item.link} />
            ))}
          </NavList>
          <UserMenu />
        </div>
      </div>
    </header>
  )
}

export default Header