import React, { Suspense, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Helmet } from 'react-helmet';

import Loading from '../../../components/Loading';
import { Form, Input } from '../../../components/Form';
import { AuthContext } from '../../../context/auth';
import Tab from '../../../components/Tab';

import imageProfileBanner from '../../../assets/images/image05.jpg';
import './Profile.scss';
import * as Constants from '../../../constants';

const AdminInfoProfile = React.lazy(() =>
    import('../../../components/AdminInfo/AdminInfoProfile')
);

function Profile() {
    const [userData, setUserData] = useState({
        fullName: '',
        email: '',
        _id: '',
    });
    const { user, logout, updateUser } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        setUserData({
            fullName: user.fullName,
            email: user.email,
            _id: user._id,
        });
    }, [user]);

    const deleteProfile = async (id) => {
        try {
            await axios.delete(`${Constants.URL_USER_BASE}${id}`);
            logout();
            navigate('/');
        } catch (error) {
            console.error(error);
        }
    };

    const handleSubmit = async (e, id) => {
        e.preventDefault();
        try {
            await axios.patch(
                `${Constants.URL_USER_BASE}${id}`,
                {
                    fullName: userData.fullName,
                    email: userData.email,
                    _id: id,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );
            updateUser(userData);
        } catch (error) {
            console.error(error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    return (
        <>
            <Helmet>
                <title>Profile | My App</title>
            </Helmet>
            <h1 className="dashboard-title">Profile</h1>
            <Tab
                items={[
                    {
                        title: 'Profile',
                        content: (
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
                        ),
                    },
                    {
                        title: 'Followers',
                        content: 'Followers',
                    },
                    {
                        title: 'Friends',
                        content: 'Friends',
                    },
                    {
                        title: 'Posts',
                        content: 'Posts',
                    },
                    {
                        title: 'Settings',
                        content: (
                            <div className="profile-form">
                                <Form
                                    handleSubmit={(e) =>
                                        handleSubmit(e, user._id)
                                    }
                                >
                                    <Input
                                        onChange={handleChange}
                                        type="text"
                                        placeholder="First Name"
                                        name="fullName"
                                        value={userData.fullName}
                                        required
                                    />
                                    <Input
                                        onChange={handleChange}
                                        type="email"
                                        placeholder="Email"
                                        name="email"
                                        value={userData.email}
                                        required
                                    />
                                    <button
                                        type="submit"
                                        className="btn-second"
                                    >
                                        Send
                                    </button>
                                </Form>
                                <div className="btn-group">
                                    <button
                                      type="button"
                                      className="btn btn-red"
                                      onClick={() => deleteProfile(user._id)}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ),
                    },
                ]}
            />
        </>
    );
}

export default Profile;
