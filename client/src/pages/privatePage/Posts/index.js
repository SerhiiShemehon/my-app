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
    const [modalOpen, setModalOpen] = useState(false);
    const [isUpdatePage, setIsUpdatePage] = useState(true);

    useEffect(() => {
        fetchData();
    }, [isUpdatePage]);

    const fetchData = async () => {
        try {
            const res = await fetch(Constants.URL_POSTS_BASE);
            const data = await res.json();
            setPosts(data.data)
        } catch (error) {
            console.error(error)
        }
    }

    const addPost = async (post) => {
        try {
            const res = await fetch(Constants.URL_POSTS_BASE, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(post),
            });
            const data = await res.json()
            setPosts([...posts, data])
        } catch (error) {
            console.error(error)
        }
    };

    const updatePosts = async (e, id, post) => {
        e.preventDefault();
        try {
            const updatedPost = { ...post, _id: id };
            const res = await fetch(`${Constants.URL_POSTS_BASE}${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(updatedPost),
            });
            const data = await res.json()
            setPosts(posts.map((p) => (p._id === id ? data : p)));
        }  catch (error) {
            console.error(error)
        }
    };

    const removePosts = async (e, id) => {
        e.preventDefault();
        try {
            await fetch(`${Constants.URL_POSTS_BASE}${id}`, {
                method: "DELETE",
            });
            setIsUpdatePage(!isUpdatePage);
        }  catch (error) {
            console.error(error)
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
                    <PostsForm
                        addedPosts={addPost}
                        closeModal={closeModal}
                    />
                </Modal>
            ) : null}
        </>
    );
}

export default Posts;
