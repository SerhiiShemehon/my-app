import {TOP_CATEGORY, TOP_TAG, FOOTER_MENU} from "../../data";

import React from "react";
import Logo from "components/Logo";
import {NavGroup, NavItem, NavList} from "components/Nav";
import {FooterInfo, FooterNav} from "./index";

import './Footer.scss'

function Footer() {
  return (
    <footer className='footer'>
      <div className='container'>
        <FooterInfo>
          <Logo />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p className="copyright">©My-app 2022. All rights reserved</p>
        </FooterInfo>
        <FooterNav>
          <NavGroup title='Top Category'>
            <NavList className='footer-menu'>
              {TOP_CATEGORY.map((item, index) => (
                <NavItem key={item.id}>
                  <a href={item.link}>{item.title}</a>
                </NavItem>
              ))}
            </NavList>
          </NavGroup>
          <NavGroup title='Top Tag'>
            <NavList className='footer-menu'>
              {TOP_TAG.map((item, index) => (
                <NavItem key={item.id}>
                  <a href={item.link}>{item.title}</a>
                </NavItem>
              ))}
            </NavList>
          </NavGroup>
          <NavGroup title='Menu'>
            <NavList className='footer-menu'>
              {FOOTER_MENU.map((item, index) => (
                <NavItem key={item.id}>
                  <a href={item.link}>{item.title}</a>
                </NavItem>
              ))}
            </NavList>
          </NavGroup>
        </FooterNav>
      </div>
    </footer>
  )
}

export default Footer