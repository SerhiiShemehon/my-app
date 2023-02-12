import './Nav.scss';

function NavGroup({ title, children }) {
    return (
        <div className="nav-group">
            {title ? <h3 className="title-group">{title}</h3> : null}
            {children}
        </div>
    );
}

export default NavGroup;
