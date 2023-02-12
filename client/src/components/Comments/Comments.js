import { useContext, useEffect, useState } from 'react';
import axios from 'axios';

import FormComments from './FormComments';
import CommentItem from './CommentItem';
import { AuthContext } from '../../context/auth';

import * as Constants from '../../constants';
import './Comments.scss';

function Comments({ id }) {
    const [comments, setComments] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        if (id !== undefined) {
            fetchData();
        }
    }, [id]);

    const fetchData = async () => {
        try {
            const res = await axios(
                `${Constants.URL_POSTS_BASE}${id}/comments`
            );
            const data = await res.data;
            setComments(data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleCommentLike = async (commentId) => {
        try {
            const res = await axios.patch(
                `${Constants.URL_POSTS_BASE}${id}/comments/${commentId}/like`
            );
            const data = await res.data.comments;
            setComments(data);
        } catch (error) {
            console.error(error);
        }
    };

    const addComments = async (newComment) => {
        if (user) {
            try {
                const res = await axios.post(
                    `${Constants.URL_POSTS_BASE}${id}/comments`,
                    {
                        text: newComment,
                        userId: user._id,
                    }
                );
                const comments = await res.data.comments;
                setComments(comments);
            } catch (error) {
                console.error(error);
            }
        }
    };

    const addReplyComments = async (commentId, text) => {
        try {
            const res = await axios.patch(
              `${Constants.URL_POSTS_BASE}${id}/comments/${commentId}/reply`, {text}
            );
            const data = await res.data.comments;
            setComments(data);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="comments-section">
            <h2>Comments</h2>
            {!comments.length ? (
                <p>No comments</p>
            ) : (
                <div className="comments-list">
                    {comments.map((elem) => (
                        <CommentItem
                            key={elem._id}
                            handleCommentLike={handleCommentLike}
                            addReplyComments={addReplyComments}
                            user={user}
                            comment={elem}
                        />
                    ))}
                </div>
            )}
            {user ? <FormComments addComments={addComments} /> : null}
        </div>
    );
}

export default Comments;
