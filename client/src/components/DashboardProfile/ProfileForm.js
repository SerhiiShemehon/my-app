import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import { Form, Input } from '../Form';
import { AuthContext } from '../../context/auth';
import * as Constants from '../../constants';

function ProfileForm() {
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
        <div className="profile-form">
            <Form handleSubmit={(e) => handleSubmit(e, user._id)}>
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
                <button type="submit" className="btn-second">
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
    );
}

export default ProfileForm;
