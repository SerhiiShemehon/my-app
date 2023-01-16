import React, { Suspense, useContext } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../Loading';
import { NavItem, NavList } from '../Nav';
import { AuthContext } from '../../context/auth';
import { MENU_DASHBOARD } from '../../data';

const AdminInfo = React.lazy(() => import('../AdminInfo/AdminInfo'));

const DashboardSidebar = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className="dashboard-sidebar">
            <Suspense fallback={<Loading />}>
                <Link to="/profile">
                    <AdminInfo user={user} />
                </Link>
            </Suspense>
            <NavList className="dashboard-menu">
                {MENU_DASHBOARD.map((item, index) => (
                    <NavItem
                        key={item.id}
                        title={item.title}
                        link={item.link}
                        Icon={item.icon}
                    />
                ))}
            </NavList>
        </div>
    );
};
export default DashboardSidebar;
