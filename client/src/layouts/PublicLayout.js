import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Header from '../components/Header';
import { Footer } from '../components/Footer';

function PublicLayout() {
    return (
        <div className="page-holder">
            <div className="wrapper">
                <Header />
                <div className="main">
                    <Outlet />
                </div>
                <ToastContainer />
            </div>
            <Footer />
        </div>
    );
}

export default PublicLayout;
