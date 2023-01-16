import React, { Suspense, useContext } from 'react';

import Loading from '../../../components/Loading';
import { AuthContext } from '../../../context/auth';

import imageProfileBanner from '../../../assets/images/image05.jpg';
import './Profile.scss';

const AdminInfoProfile = React.lazy(() =>
    import('../../../components/AdminInfo/AdminInfoProfile')
);

function Profile() {
    const { user } = useContext(AuthContext);
    return (
        <>
            <h1 className="dashboard-title">Profile</h1>
            <div
                className="profile-banner"
                style={{ backgroundImage: `url('${imageProfileBanner}')` }}
            >
                <Suspense fallback={<Loading />}>
                    <AdminInfoProfile user={user} />
                </Suspense>
            </div>
        </>
    );
}

export default Profile;
