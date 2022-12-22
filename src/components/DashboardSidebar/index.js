import React, {Suspense} from "react";
import Loading from "components/Loading";
import {NavItem, NavList} from "components/Nav";
import {MENU_DASHBOARD, USERS} from "data";

const AdminInfo = React.lazy(()=> import('components/AdminInfo'));

const DashboardSidebar = () => {
  return (
    <div className="dashboard-sidebar">
      <Suspense fallback={<Loading />}>
        <AdminInfo user={USERS[0]} />
      </Suspense>
      <NavList className='dashboard-menu'>
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