import React from "react";

function SocialLinkItem({icon, alt, link}) {
  return (
    <li className="social-link-item">
      <a href={link}>
        <img src={icon} alt={alt} />
      </a>
    </li>
  )
}

export default SocialLinkItem