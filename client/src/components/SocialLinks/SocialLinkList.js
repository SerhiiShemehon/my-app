import React from 'react';
import './SocialLinks.scss';

function SocialLinkList({ children }) {
    return <ul className="social-link-list">{children}</ul>;
}

export default SocialLinkList;
