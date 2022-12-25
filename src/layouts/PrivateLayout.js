import React from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Header from 'components/Header';
import DashboardSidebar from 'components/DashboardSidebar';
import {Footer} from 'components/Footer';

import './PrivateLayout.scss';

function PrivateLayout() {
  return (
    <div className={'page-holder dashboard-holder'}>
      <div className={'wrapper'}>
        <Header />
        <div className={'main container container-big'}>
          <DashboardSidebar />
          <div className={'dashboard-content'}>
            <Outlet />
          </div>
        </div>
        <ToastContainer />
      </div>
      <Footer />
    </div>
  )
}

export default PrivateLayout;