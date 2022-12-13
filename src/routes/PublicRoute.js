import React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "layout";
import { Home, NoMatch, Post } from "pages";

import 'assets/css/style.scss';

function PublicRoute() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/post/:id' element={<Post />} />
        <Route path='*' element={<NoMatch />} />
      </Route>
    </Routes>
  )
}

export default PublicRoute;