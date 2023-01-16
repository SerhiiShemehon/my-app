import React, { useState, Suspense } from 'react';

import Loading from '../../../components/Loading';
import Modal from '../../../components/Modal';
import { PostsForm } from '../../../components/DashboardPosts';
import { ReactComponent as EditNote } from '../../../assets/icons/edit-note.svg';

const PostsList = React.lazy(() =>
    import('../../../components/DashboardPosts/PostsList')
);

function Posts() {
    const [posts, setPosts] = useState([]);
    const [id, setId] = useState(1);
    const [modal, setModal] = useState(false);

    const addedPosts = (post) => {
        setId((prev) => prev + 1);
        setPosts([
            ...posts,
            {
                id,
                title: post.title,
                description: post.description,
                status: post.status,
                date: post.date,
                author: post.author,
            },
        ]);
    };

    const updatePosts = (e, id, post) => {
        e.preventDefault();
        const updatePosts = posts.map((item) =>
            item.id === id ? { ...item, ...post } : item
        );
        setPosts(updatePosts);
    };

    const removePosts = (e, id) => {
        e.preventDefault();
        const updatePosts = posts.filter((post) => post.id !== id);
        setPosts(updatePosts);
    };

    const openModal = () => {
        setModal(true);
    };

    const closeModal = () => {
        setModal(false);
    };

    return (
        <>
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
            {modal ? (
                <Modal closeModal={closeModal}>
                    <PostsForm
                        addedPosts={addedPosts}
                        closeModal={closeModal}
                    />
                </Modal>
            ) : null}
        </>
    );
}

export default Posts;
