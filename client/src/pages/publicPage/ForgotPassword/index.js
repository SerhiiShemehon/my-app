import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Form, Input } from '../../../components/Form';

import './ForgotPassword.scss';

function ForgotPassword() {
    const [contact, setContact] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setContact({ ...contact, [name]: value });
    };

    return (
        <>
            <Helmet>
                <title>Forgot Password | My App</title>
            </Helmet>
            <div className="admin-form-section small-section">
                <div className="container">
                    <h2 className="title-block">Forgot Password</h2>
                    <p className="subtitle-block">
                        Enter your email or username, and we&apos;ll send you a
                        link to reset your password.
                    </p>
                    <Form handleSubmit={null}>
                        <Input
                            onChange={handleChange}
                            type="text"
                            placeholder="Email / Username"
                            name="email-username"
                            required
                            className="col-12"
                        />
                        <button type="submit" className="btn-second">
                            Send
                        </button>
                    </Form>
                </div>
            </div>
        </>
    );
}

export default ForgotPassword;
