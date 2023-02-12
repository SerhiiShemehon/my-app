function SocialLinkItem({ Icon, link }) {
    return (
        <li className="social-link-item">
            <a href={link}>
                <Icon />
            </a>
        </li>
    );
}

export default SocialLinkItem;
