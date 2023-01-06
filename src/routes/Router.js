import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { PublicLayout, PrivateLayout } from 'layouts';
import { Home, Contact, Post, NoMatch, Login, Registration, PrivacyPolicy } from 'pages/publicPage';
import { Dashboard, Posts, Tasks, Profile, PrivatPrivacyPolicy } from 'pages/privatePage';

import 'assets/css/style.scss';

const isLogin = false;

function Router() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route index element={<Home />} />
        <Route path='/post/:id' element={<Post />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/registration' element={<Registration />} />
        {!isLogin ? <Route path='/privacy-policy' element={<PrivacyPolicy />} /> : null }
        <Route path='*' element={<NoMatch />} />
      </Route>
      <Route element={<PrivateLayout />}>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/posts' element={<Posts />} />
        <Route path='/tasks' element={<Tasks />} />
        <Route path='/profile' element={<Profile />} />
        {isLogin ? <Route path='/privacy-policy' element={<PrivatPrivacyPolicy />} /> : null }
      </Route>
    </Routes>
  )
}

export default Router;