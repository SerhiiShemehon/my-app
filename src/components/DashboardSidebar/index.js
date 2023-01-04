import React, {Suspense, useContext} from 'react';
import Loading from 'components/Loading';
import {NavItem, NavList} from 'components/Nav';
import { UserContext } from 'context/userContext';
import {MENU_DASHBOARD} from 'data';

const AdminInfo = React.lazy(()=> import('components/AdminInfo'));

const DashboardSidebar = () => {
  const user = useContext(UserContext);
  return (
    <div className={'dashboard-sidebar'}>
      <Suspense fallback={<Loading />}>
        <AdminInfo user={user} />
      </Suspense>
      <NavList className={'dashboard-menu'}>
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
  )
}
export default DashboardSidebar;