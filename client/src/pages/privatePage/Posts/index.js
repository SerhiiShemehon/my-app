import React, { useState, useEffect, Suspense } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet';

import Loading from '../../../components/Loading';
import Modal from '../../../components/Modal';
import { PostsForm } from '../../../components/DashboardPosts';
import { ReactComponent as EditNote } from '../../../assets/icons/edit-note.svg';
import * as Constants from '../../../constants';

const PostsList = React.lazy(() =>
    import('../../../components/DashboardPosts/PostsList')
);

function Posts() {
    const [posts, setPosts] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [isUpdatePage, setIsUpdatePage] = useState(true);

    useEffect(() => {
        fetchData();
    }, [isUpdatePage]);

    const fetchData = async () => {
        try {
            const res = await axios(Constants.URL_POSTS_BASE);
            const data = await res.data;
            setPosts(data.data);
        } catch (error) {
            console.error(error);
        }
    };

    const addPost = async (post) => {
        try {
            const formData = new FormData();
            formData.append('title', post.title);
            formData.append('body', post.body);
            formData.append('categories', post.categories);
            formData.append('tag', post.tag);
            formData.append('slug', post.slug);
            formData.append('thumbnail', post.thumbnail);

            const res = await axios.post(Constants.URL_POSTS_BASE, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            const data = await res.data;
            setPosts([...posts, data]);
        } catch (error) {
            console.error(error);
        }
    };

    const updatePosts = async (id, post) => {
        try {
            const formData = new FormData();
            formData.append('title', post.title);
            formData.append('body', post.body);
            formData.append('categories', post.categories);
            formData.append('tag', post.tag);
            formData.append('slug', post.slug);
            formData.append('_id', id);
            const res = await axios.patch(
                `${Constants.URL_POSTS_BASE}${id}`,
                formData,
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );
            const data = await res.data;
            setPosts(posts.map((p) => (p._id === id ? data : p)));
        } catch (error) {
            console.error(error);
        }
    };

    const removePosts = async (e, id) => {
        e.preventDefault();
        try {
            await axios.delete(`${Constants.URL_POSTS_BASE}${id}`);
            setIsUpdatePage(!isUpdatePage);
        } catch (error) {
            console.error(error);
        }
    };

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <>
            <Helmet>
                <title>Posts | My App</title>
            </Helmet>
            <div className="dashboard-header">
                <h1 className="dashboard-title">Posts</h1>
                <button className="btn-icon" onClick={openModal}>
                    <EditNote />
                </button>
            </div>
            {posts.length ? (
                <Suspense fallback={<Loading />}>
                    <PostsList
                        posts={posts}
                        updatePosts={updatePosts}
                        removePosts={removePosts}
                    />
                </Suspense>
            ) : (
                <div className="no-post">No posts</div>
            )}
            {modalOpen ? (
                <Modal closeModal={closeModal}>
                    <PostsForm addedPosts={addPost} closeModal={closeModal} />
                </Modal>
            ) : null}
        </>
    );
}

export default Posts;
