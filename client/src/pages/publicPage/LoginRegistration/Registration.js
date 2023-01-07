import React, {useState} from 'react';

import {Form, Input} from 'components/Form';

import './LoginRegistration.scss'
import * as Constants from 'constants';

function Registration() {
  const [contact, setContact] = useState({
    fmame: '',
    lmame: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    const result = await (
      await fetch(Constants.URL_REGISTRATION, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: contact.email,
          password: contact.password,
          confirmPassword: contact.confirmPassword,
          firstName: contact.fmame,
          lastName: contact.lmame
        })
      })
    ).json();
    if (result) {
      console.log(result)
    } else {
      console.log('nothing')
    }
  }

  const handleChange = (e) => {
    const {name, value} = e.target;
    setContact({...contact, [name]: value})
  }


  return (
    <>
      <div className={'admin-form-section'}>
        <div className={'container'}>
          <h2 className={'title-block'}>Registration</h2>
          <Form handleSubmit={handleSubmit}>
            <Input
              handleChange={handleChange}
              type={'text'}
              placeholder={'First Name'}
              name={'fmame'}
              required
              className={'col-6'} />
            <Input
              handleChange={handleChange}
              type={'text'}
              placeholder={'Last Name'}
              name={'lmame'}
              required
              className={'col-6'} />
            <Input
              handleChange={handleChange}
              type={'email'}
              placeholder={'Email'}
              name={'email'}
              required
              className={'col-6'} />
            <Input
              handleChange={handleChange}
              type={'tel'}
              placeholder={'Phone'}
              name={'phone'}
              pattern="[0-9]{10,}"
              required
              className={'col-6'} />
            <Input
              handleChange={handleChange}
              type={'password'}
              placeholder={'Password'}
              name={'password'}
              required
              className={'col-6'} />
            <Input
              handleChange={handleChange}
              type={'password'}
              placeholder={'Confirm Password'}
              name={'confirmPassword'}
              required
              className={'col-6'} />
            <button type={'submit'} className={'btn-second'}>Send</button>
          </Form>
        </div>
      </div>
    </>
  );
}

export default Registration;
