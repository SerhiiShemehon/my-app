import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';

import ImageBanner from '../../../components/ImageBanner';
import { Form, Input, Textarea } from '../../../components/Form';
import {
    SocialLinkList,
    SocialLinkItem,
} from '../../../components/SocialLinks';
import notify from '../../../utils/notification.helpers';

import { ReactComponent as Twitter } from '../../../assets/icons/twitter.svg';
import { ReactComponent as Facebook } from '../../../assets/icons/facebook.svg';
import { ReactComponent as Google } from '../../../assets/icons/google.svg';
import { ReactComponent as Github } from '../../../assets/icons/github.svg';

import imageBanner from '../../../assets/images/image03.jpg';

import './Contact.scss';

function Contact() {
    const [contact, setContact] = useState({
        fmame: '',
        lmame: '',
        email: '',
        phone: '',
        message: '',
    });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        notify('Ok! Form sent');
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setContact({ ...contact, [name]: value });
    };

    return (
        <>
            <Helmet>
                <title>Contact | My App</title>
            </Helmet>
            <ImageBanner image={imageBanner} title="Contact" />
            <div className="container">
                <div className="form-section">
                    <h2 className="title-block">Contact Form</h2>
                    <Form handleSubmit={handleSubmit}>
                        <Input
                            onChange={handleChange}
                            type="text"
                            placeholder="First Name"
                            name="fmame"
                            required
                            className="col-6"
                        />
                        <Input
                            onChange={handleChange}
                            type="text"
                            placeholder="Last Name"
                            name="lmame"
                            required
                            className="col-6"
                        />
                        <Input
                            onChange={handleChange}
                            type="email"
                            placeholder="Email"
                            name="email"
                            required
                            className="col-6"
                        />
                        <Input
                            onChange={handleChange}
                            type="tel"
                            placeholder="Phone"
                            name="phone"
                            pattern="[0-9]{10,}"
                            required
                            className="col-6"
                        />
                        <Textarea
                            onChange={handleChange}
                            placeholder="Message"
                            required
                            name="message"
                        />
                        <button type="submit" className="btn-second">
                            Send
                        </button>
                    </Form>
                </div>
                <div className="social-links-section">
                    <h3 className="title-block">follow me</h3>
                    <SocialLinkList>
                        <SocialLinkItem
                            link="https://twitter.com/"
                            Icon={Twitter}
                        />
                        <SocialLinkItem
                            link="https://www.facebook.com/"
                            Icon={Facebook}
                        />
                        <SocialLinkItem
                            link="https://www.google.com/"
                            Icon={Google}
                        />
                        <SocialLinkItem
                            link="https://github.com/"
                            Icon={Github}
                        />
                    </SocialLinkList>
                </div>
            </div>
        </>
    );
}

export default Contact;
