import React from 'react';
import PostsItem from './PostsItem';

import './Posts.scss';

const PostsList = ({ posts, updatePosts, removePosts }) => {
    return (
        <div className={'post-list'}>
            <div className={'post-header'}>
                <span>Post</span>
                <span>Slug</span>
                <span>Tag</span>
                <span>Categories</span>
                <span />
            </div>
            {posts.map((post) => (
                <PostsItem
                    key={post._id}
                    post={post}
                    updatePosts={updatePosts}
                    removePosts={removePosts}
                />
            ))}
        </div>
    );
};

export default PostsList;
