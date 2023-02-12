import React, { useEffect, useState } from 'react';
import axios from 'axios';
import * as Constants from '../../constants';

import { ReactComponent as Like } from '../../assets/icons/thumbs-up-solid.svg';
import FormComments from "./FormComments";

const CommentItem = ({ comment, handleCommentLike, addReplyComments, user }) => {
    const [author, setAuthor] = useState({});
    const [showReply, setShowReply] = useState(false);
    useEffect(() => {
        fetchUser();
    }, []);

    const fetchUser = async () => {
        try {
            const res = await axios(
                `${Constants.URL_USER_BASE}${comment.userId}`
            );
            const data = await res.data;
            setAuthor(data);
        } catch (error) {
            console.error(error);
        }
    };

    const addComments = async (newComment) => {
        addReplyComments(comment._id, newComment)
    };

    return (
        <div className="comment-item">
            <div className="comment-header">
                <ul className="info-block">
                    <li>
                        <strong>Author:</strong> {author.fullName}
                    </li>
                    <li>
                        <strong>Likes:</strong> {comment.likes}
                    </li>
                </ul>
                {user ? (
                    <div className="btn-block">
                        <button
                            type="button"
                            className="btn-like"
                            onClick={() => handleCommentLike(comment._id)}
                        >
                            <Like />
                        </button>
                        <button
                          type="button"
                          className="btn-reply"
                          onClick={() => setShowReply(!showReply)}
                        >
                            reply
                        </button>
                    </div>
                ) : null}
            </div>

            <div
                className="text-block"
                dangerouslySetInnerHTML={{ __html: comment.text }}
            />
            {comment.replies.map((elem, index) => <div className="comment-item-reply" key={index}>
                <div
                  className="text-block"
                  dangerouslySetInnerHTML={{ __html: elem }}
                />
            </div>)}
            {user && showReply ? <FormComments addComments={addComments} /> : null}
        </div>
    );
};

export default CommentItem;
