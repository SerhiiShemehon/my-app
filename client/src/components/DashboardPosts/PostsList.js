import PostsItem from './PostsItem';

import './Posts.scss';

function PostsList({ posts, updatePosts, removePosts, className }) {
    return (
        <div className={`post-list ${className}`}>
            <div className="post-header">
                <span>Post</span>
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
}

export default PostsList;
