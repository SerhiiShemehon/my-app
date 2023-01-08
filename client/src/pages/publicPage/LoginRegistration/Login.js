import React, {useState, useContext} from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthContext } from 'context/auth';
import {Form, Input} from 'components/Form';

import './LoginRegistration.scss'
import * as Constants from 'constants';

function Login() {
  const context = useContext(AuthContext);
  const [contact, setContact] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault()
    const result = await (
      await fetch(Constants.URL_LOGIN, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: contact.email,
          password: contact.password,
        })
      })
    ).json();
    if (result) {
      context.login(result)
      setTimeout(()=> {
        navigate('/dashboard');
      },300)
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
      <div className={'admin-form-section small-section'}>
        <div className={'container'}>
          <h2 className={'title-block'}>Login</h2>
          <Form handleSubmit={handleSubmit}>
            <Input
              handleChange={handleChange}
              type={'email'}
              placeholder={'Email'}
              name={'email'}
              required
              className={'col-12'} />
            <Input
              handleChange={handleChange}
              type={'password'}
              placeholder={'Password'}
              name={'password'}
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
