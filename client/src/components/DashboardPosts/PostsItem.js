import { useState } from 'react';

import { ReactComponent as MoreHoriz } from '../../assets/icons/more-horiz.svg';
import Modal from '../Modal';
import UpdatePostsForm from './UpdatePostsForm';

function PostsItem({ post, updatePosts, removePosts }) {
    const [setting, setSetting] = useState(false);
    const [modal, setModal] = useState(false);

    const closeModal = () => {
        setModal(false);
    };

    const editPost = () => {
        setSetting(false);
        setModal(true);
    };

    return (
        <>
            <div className="post-item" id={post._id}>
                <div>
                    <span className="title-block">{post.title}</span>
                </div>
                <div>
                    <span className="title-block">{post.tag}</span>
                </div>
                <div>
                    <span className="title-block">{post.categories}</span>
                </div>
                <div className="setting-block">
                    <button
                        type="button"
                        className="opener-setting"
                        onClick={() => setSetting((prev) => !prev)}
                    >
                        <MoreHoriz />
                    </button>
                    {setting ? (
                        <div className="setting-holder">
                            <button
                                type="button"
                                className="edit-block"
                                onClick={editPost}
                            >
                                Edit
                            </button>
                            <button
                                type="button"
                                className="remove-block"
                                onClick={(e) => removePosts(e, post._id)}
                            >
                                Delete
                            </button>
                        </div>
                    ) : null}
                </div>
            </div>
            {modal ? (
                <Modal closeModal={closeModal}>
                    <UpdatePostsForm
                        post={post}
                        updatePosts={updatePosts}
                        closeModal={closeModal}
                    />
                </Modal>
            ) : null}
        </>
    );
}

export default PostsItem;
