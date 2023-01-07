import React from 'react';

import Logo from 'components/Logo';
import {NavGroup, NavItem, NavList} from 'components/Nav';
import {FooterInfo, FooterNav} from './index';

import {CATEGORY, TAG, MENU_FOOTER} from 'data';

import './Footer.scss'

function Footer() {
  return (
    <footer className={'footer'}>
      <div className={'container container-big'}>
        <FooterInfo>
          <Logo />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p className={'copyright'}>©My-app 2022. All rights reserved</p>
        </FooterInfo>
        <FooterNav>
          <NavGroup title={'Top Category'}>
            <NavList className={'footer-menu'}>
              {CATEGORY.map((item, index) => (
                <NavItem key={item.id} title={item.title} link={item.link} />
              ))}
            </NavList>
          </NavGroup>
          <NavGroup title={'Top Tag'}>
            <NavList className={'footer-menu'}>
              {TAG.map((item, index) => (
                <NavItem key={item.id} title={item.title} link={item.link} />
              ))}
            </NavList>
          </NavGroup>
          <NavGroup title={'Menu'}>
            <NavList className={'footer-menu'}>
              {MENU_FOOTER.map((item, index) => (
                <NavItem key={item.id} title={item.title} link={item.link} />
              ))}
            </NavList>
          </NavGroup>
        </FooterNav>
      </div>
    </footer>
  )
}

export default Footer