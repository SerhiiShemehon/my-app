import React, {useState} from 'react';

import {Form, Input} from 'components/Form';
import notify from 'utils/notification.helpers'

import './LoginRegistration.scss'

function Login() {
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
      <div className={'admin-form-section small-section'}>
        <div className={'container'}>
          <h2 className={'title-block'}>Login</h2>
          <Form handleSubmit={handleSubmit}>
            <Input
              handleChange={handleChange}
              type={'text'}
              placeholder={'First Name'}
              name={'fmame'}
              required
              className={'col-12'} />
            <Input
              handleChange={handleChange}
              type={'text'}
              placeholder={'Last Name'}
              name={'lmame'}
              required
              className={'col-12'} />
            <button type={'submit'} className={'btn-second'}>Send</button>
          </Form>
        </div>
      </div>
    </>
  );
}

export default Login;
