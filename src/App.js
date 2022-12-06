import {POSTS} from "./data.js";

import React from "react";
import Select from 'react-select';


import Header from 'components/Header';
import ImageBanner from "components/ImageBanner";
import {PostWrapper, PostFilter, PostList, PostItem, PostPagination} from "components/Posts";
import {Footer} from 'components/Footer';

import imageBanner from 'images/image01.jpg';

import './assets/css/style.scss';
import PostItemBig from "./components/Posts/PostItemBig";

function App() {
  return (
    <div className="page-holder">
      <Header />
      <ImageBanner image={imageBanner} />
      <PostWrapper>
        <PostFilter />
        <PostList>
          {POSTS.map((item, index) => (
            index === 0
              ? <div key={item.id} className='post-item'><PostItemBig {...item} /></div>
              : <div key={item.id} className='post-item'><PostItem {...item} /></div>
          ))}
        </PostList>
        <PostPagination />
      </PostWrapper>
      <Footer />
    </div>
  );
}

export default App;
