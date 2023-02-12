import { Link } from 'react-router-dom';

import Logo from '../Logo';
import { NavGroup, NavItem, NavList } from '../Nav';
import FooterInfo from './FooterInfo';
import FooterNav from './FooterNav';

import { CATEGORY, TAG, MENU_FOOTER } from '../../data';

import './Footer.scss';

function Footer() {
    return (
        <footer className="footer">
            <div className="container container-big">
                <FooterInfo>
                    <Logo />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                    </p>
                    <p className="copyright">
                        ©My-app 2022. All rights reserved |{' '}
                        <Link to="/privacy-policy">Privacy Policy</Link>
                    </p>
                </FooterInfo>
                <FooterNav>
                    <NavGroup title="Top Category">
                        <NavList className="footer-menu">
                            {CATEGORY.map((item) => (
                                <NavItem
                                    key={item.id}
                                    title={item.title}
                                    link={item.link}
                                />
                            ))}
                        </NavList>
                    </NavGroup>
                    <NavGroup title="Top Tag">
                        <NavList className="footer-menu">
                            {TAG.map((item) => (
                                <NavItem
                                    key={item.id}
                                    title={item.title}
                                    link={item.link}
                                />
                            ))}
                        </NavList>
                    </NavGroup>
                    <NavGroup title="Menu">
                        <NavList className="footer-menu">
                            {MENU_FOOTER.map((item) => (
                                <NavItem
                                    key={item.id}
                                    title={item.title}
                                    link={item.link}
                                />
                            ))}
                        </NavList>
                    </NavGroup>
                </FooterNav>
            </div>
        </footer>
    );
}

export default Footer;
