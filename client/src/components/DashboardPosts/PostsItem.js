import React, { useState } from 'react';

import { ReactComponent as MoreHoriz } from '../../assets/icons/more-horiz.svg';
import Modal from '../Modal';
import { UpdatePostsForm } from './index';

const PostsItem = ({ post, updatePosts, removePosts }) => {
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
            <div className={`post-item`} id={post.id}>
                <div>
                    <span className={'title-block'}>{post.title}</span>
                </div>
                <div>
                    <span
                        className={`status-block status-${post.status.toLowerCase()}`}
                    >
                        {post.status}
                    </span>
                </div>
                <div>
                    <span className={'date-block'}>{post.date}</span>
                </div>
                <div>
                    <span className={'author-block'}>{post.author}</span>
                </div>
                <div className={'setting-block'}>
                    <button
                        className={'opener-setting'}
                        onClick={() => setSetting((prev) => !prev)}
                    >
                        <MoreHoriz />
                    </button>
                    {setting ? (
                        <div className={'setting-holder'}>
                            <button className={'edit-block'} onClick={editPost}>
                                Edit
                            </button>
                            <button
                                className={'remove-block'}
                                onClick={(e) => removePosts(e, post.id)}
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
};

export default PostsItem;
