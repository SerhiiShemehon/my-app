import React, {useState} from "react";

import ImageBanner from "components/ImageBanner";
import {Form, Input, Textarea} from "components/Form";
import {SocialLinkList, SocialLinkItem} from "components/SocialLinks"
import notify from "utils/notification.helpers"

import imageBanner from 'assets/images/image03.jpg';
import twitter from 'assets/icons/twitter.svg';
import facebook from 'assets/icons/facebook.svg';
import google from 'assets/icons/google.svg';
import github from 'assets/icons/github.svg';
import './Contact.scss'

function Contact() {
  const [contact, setContact] = useState({
    fmame: '',
    lmame: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    notify('Ok! Form sent')
  }

  const handleChange = (e) => {
    const {name, value} = e.target;
    setContact({...contact, [name]: value})
  }


  return (
    <>
      <ImageBanner image={imageBanner} title={'Contact'} />
      <div className='container'>
        <div className='form-section'>
          <h2 className='title-block'>Contact Form</h2>
          <Form handleSubmit={handleSubmit}>
            <Input
              handleChange={handleChange}
              type='text'
              placeholder='First Name'
              name='fmame'
              required
              className='col-6' />
            <Input
              handleChange={handleChange}
              type='text'
              placeholder='Last Name'
              name='lmame'
              required
              className='col-6' />
            <Input
              handleChange={handleChange}
              type='email'
              placeholder='Email'
              name='email'
              required
              className='col-6' />
            <Input
              handleChange={handleChange}
              type='text'
              placeholder='Phone'
              name='phone'
              required
              className='col-6' />
            <Textarea
              handleChange={handleChange}
              placeholder='Message'
              required
              name='message' />
            <button type='submit' className='btn'>Send</button>
          </Form>
        </div>
        <div className='social-links-section'>
          <h3 className='title-block'>follow me</h3>
          <SocialLinkList>
            <SocialLinkItem link={'https://twitter.com/'} icon={twitter} alt={'twitter'} />
            <SocialLinkItem link={'https://www.facebook.com/'} icon={facebook} alt={'facebook'} />
            <SocialLinkItem link={'https://www.google.com/'} icon={google} alt={'google'} />
            <SocialLinkItem link={'https://github.com/'} icon={github} alt={'github'} />
          </SocialLinkList>
        </div>
      </div>
    </>
  );
}

export default Contact;
