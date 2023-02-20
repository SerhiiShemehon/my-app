import React, { Suspense, useContext } from 'react';
import Loading from '../Loading';
import imageProfileBanner from '../../assets/images/image05.jpg';
import { AuthContext } from '../../context/auth';

const AdminInfoProfile = React.lazy(() =>
    import('../AdminInfo/AdminInfoProfile')
);

function ProfileBanner() {
    const { user } = useContext(AuthContext);
    return (
        <div
            className="profile-banner"
            style={{
                backgroundImage: `url('${imageProfileBanner}')`,
            }}
        >
            <Suspense fallback={<Loading />}>
                <AdminInfoProfile user={user} />
            </Suspense>
        </div>
    );
}
export default ProfileBanner;
