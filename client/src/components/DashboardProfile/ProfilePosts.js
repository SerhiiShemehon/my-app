import React, { Suspense, useEffect, useState } from 'react';
import axios from 'axios';
import * as Constants from '../../constants';
import Loading from '../Loading';

const PostsList = React.lazy(() => import('../DashboardPosts/PostsList'));

function ProfilePosts() {
    const [posts, setPosts] = useState([]);

    const fetchData = async () => {
        try {
            const res = await axios(Constants.URL_POSTS_BASE);
            const data = await res.data;
            setPosts(data.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return posts.length ? (
        <Suspense fallback={<Loading />}>
            <PostsList posts={posts} className="profile-post-list" />
        </Suspense>
    ) : (
        <div className="no-post">No posts</div>
    );
}

export default ProfilePosts;
