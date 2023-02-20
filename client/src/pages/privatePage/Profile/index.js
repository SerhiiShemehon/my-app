import { Helmet } from 'react-helmet';

import Tab from '../../../components/Tab';
import {
    ProfileBanner,
    ProfileForm,
    ProfileUserList,
    ProfilePosts,
} from '../../../components/DashboardProfile';

import './Profile.scss';

function Profile() {
    const tabData = [
        {
            title: 'Profile',
            content: <ProfileBanner />,
        },
        {
            title: 'Followers',
            content: 'Followers',
        },
        {
            title: 'Friends',
            content: <ProfileUserList />,
        },
        {
            title: 'Posts',
            content: <ProfilePosts />,
        },
        {
            title: 'Settings',
            content: <ProfileForm />,
        },
    ];

    return (
        <>
            <Helmet>
                <title>Profile | My App</title>
            </Helmet>
            <h1 className="dashboard-title">Profile</h1>
            <Tab items={tabData} />
        </>
    );
}

export default Profile;
