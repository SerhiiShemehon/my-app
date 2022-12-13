import React from "react";
import { Outlet } from "react-router-dom";

import Header from "components/Header";
import {Footer} from "components/Footer";

function Layout() {
  return (
    <div className='page-holder'>
      <Header />
      <div className="main">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Layout;