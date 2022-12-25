import React from 'react';
import PostsItem from './PostsItem';

import './Posts.scss';

const PostsList = ({
  posts,
  updatePosts,
  removePosts
}) => {
 return (
   <div className={'post-list'}>
     <div className={'post-header'}>
       <span>Post</span>
       <span>Status</span>
       <span>Date</span>
       <span>Author</span>
       <span />
     </div>
     {posts.map(post => <PostsItem key={post.id} post={post} updatePosts={updatePosts} removePosts={removePosts} />)}
   </div>
 )
}

export default PostsList;

