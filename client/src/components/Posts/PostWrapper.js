import React from 'react';
import './Posts.scss';

function PostWrapper({ children }) {
    return (
        <div className="posts-wrapper">
            <div className="container">{children}</div>
        </div>
    );
}

export default PostWrapper;
