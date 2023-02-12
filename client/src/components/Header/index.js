import Logo from '../Logo';
import { NavList, NavItem } from '../Nav';
import UserMenu from '../UserMenu';

import { MENU_TOP } from '../../data';

import './Header.scss';

function Header() {
    return (
        <header className="header">
            <div className="container container-big">
                <Logo />
                <div className="header-nav">
                    <NavList className="primary-menu">
                        {MENU_TOP.map((item) => (
                            <NavItem
                                key={item.id}
                                title={item.title}
                                link={item.link}
                            />
                        ))}
                    </NavList>
                    <UserMenu />
                </div>
            </div>
        </header>
    );
}

export default Header;
