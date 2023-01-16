import React from 'react';
import './Nav.scss';

function NavList({ children, ...props }) {
    return <ul {...props}>{children}</ul>;
}

export default NavList;
