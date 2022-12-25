import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { PublicLayout, PrivateLayout } from 'layouts';
import { Home, Contact, Post, NoMatch } from 'pages/publicPage';
import { Dashboard, Posts, Tasks } from 'pages/privatePage';

import 'assets/css/style.scss';

function Router() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route index element={<Home />} />
        <Route path='/post/:id' element={<Post />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<NoMatch />} />
      </Route>
      <Route element={<PrivateLayout />}>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/posts' element={<Posts />} />
        <Route path='/tasks' element={<Tasks />} />
      </Route>
    </Routes>
  )
}

export default Router;