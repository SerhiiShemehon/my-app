import { useState, useContext } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate, Link } from 'react-router-dom';

import { AuthContext } from '../../../context/auth';
import { Form, Input } from '../../../components/Form';

import './Login.scss';
import * as Constants from '../../../constants';

function Login() {
    const { login } = useContext(AuthContext);
    const [contact, setContact] = useState({
        email: '',
        password: '',
    });
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await (
            await fetch(Constants.URL_USER_LOGIN, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: contact.email,
                    password: contact.password,
                }),
            })
        ).json();
        if (result) {
            login(result);
            setTimeout(() => {
                navigate('/dashboard');
            }, 300);
        } else {
            console.log('nothing');
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setContact({ ...contact, [name]: value });
    };

    return (
        <>
            <Helmet>
                <title>Login | My App</title>
            </Helmet>
            <div className="admin-form-section small-section">
                <div className="container">
                    <h2 className="title-block">Login</h2>
                    <Form handleSubmit={handleSubmit}>
                        <Input
                            onChange={handleChange}
                            type="email"
                            placeholder="Email"
                            name="email"
                            required
                            className="col-12"
                        />
                        <Input
                            onChange={handleChange}
                            type="password"
                            placeholder="Password"
                            name="password"
                            required
                            className="col-12"
                        />
                        <button type="submit" className="btn-second">
                            Send
                        </button>
                    </Form>
                    <Link className="link" to="/forgot-password">
                        Forgot Password?
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Login;
