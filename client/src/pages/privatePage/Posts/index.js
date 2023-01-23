import React, { useState, useEffect, Suspense } from 'react';

import Loading from '../../../components/Loading';
import Modal from '../../../components/Modal';
import { PostsForm } from '../../../components/DashboardPosts';
import { ReactComponent as EditNote } from '../../../assets/icons/edit-note.svg';
import * as Constants from "../../../constants";

const PostsList = React.lazy(() =>
    import('../../../components/DashboardPosts/PostsList')
);

function Posts() {
    const [posts, setPosts] = useState([]);
    const [modal, setModal] = useState(false);
    const [updatePage, setUpdatePage] = useState(true);

    useEffect(() => {
        fetch(Constants.URL_POSTS_BASE)
          .then((res) => res.json())
          .then((data) => setPosts(data.data));
    }, [updatePage]);

    const addedPosts = (post) => {
        fetch(Constants.URL_POSTS_BASE, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(post),
        })
          .then((res) => res.json())
          .then((data) => setPosts([...posts, data]));
    };

    const updatePosts = (e, id, post) => {
        e.preventDefault();
        const updatePosts = posts.map((item) =>
            item._id === id ? { ...item, ...post } : item
        );
        setPosts(updatePosts);
        fetch(Constants.URL_POSTS_BASE + id, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatePosts),
        }).then((res) => res.json());
    };

    const removePosts = (e, id) => {
        e.preventDefault();
        fetch(Constants.URL_POSTS_BASE + id, {
            method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => setUpdatePage(!updatePage));
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
