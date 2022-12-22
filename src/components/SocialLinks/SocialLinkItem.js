import React from "react";

function SocialLinkItem({Icon, alt, link}) {
  return (
    <li className="social-link-item">
      <a href={link}>
        <Icon />
      </a>
    </li>
  )
}

export default SocialLinkItem