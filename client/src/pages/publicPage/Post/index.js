import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { BallTriangle } from 'react-loader-spinner';
import { Helmet } from 'react-helmet';

import { Comments } from '../../../components/Comments';
import ImageBanner from '../../../components/ImageBanner';

import imageBanner from '../../../assets/images/image01.jpg';

import './Post.scss';
import * as Constants from '../../../constants';
import { ReactComponent as Like } from '../../../assets/icons/thumbs-up-solid.svg';

function Post() {
    const { id } = useParams();
    const [post, setPost] = useState({});
    const [like, setLike] = useState(0);
    const [status, setStatus] = useState(Constants.LOADING);

    useEffect(() => {
        window.scrollTo(0, 0);
        fetchData();
        updateView();
    }, []);

    const fetchData = async () => {
        setStatus(Constants.LOADING);
        try {
            const res = await axios(`${Constants.URL_POSTS_BASE}${id}`);
            const data = await res.data;
            setPost(data);
            setLike(data.likes);
            setStatus(Constants.COMPLETE);
        } catch (error) {
            setStatus(Constants.ERROR);
            console.error(error);
        }
    };

    const updateView = async () => {
        try {
            await axios.patch(`${Constants.URL_POSTS_BASE}${id}/viewcount`);
        } catch (error) {
            console.error(error);
        }
    };

    const handleLike = async () => {
        try {
            const res = await axios.put(
                `${Constants.URL_POSTS_BASE}${id}/like`
            );
            const likes = await res.data.likes;
            setLike(likes);
        } catch (error) {
            console.error(error);
        }
    };

    if (status === Constants.ERROR) {
        return (
            <>
                <Helmet>
                    <title>404 Page</title>
                </Helmet>
                <ImageBanner image={imageBanner} />
                <div className="container">
                    <h1 style={{ textAlign: 'center', margin: '50px 0' }}>
                        Oops, something went wrong
                    </h1>
                </div>
            </>
        );
    }

    return status === Constants.LOADING ? (
        <BallTriangle
            color="#5458F7"
            wrapperStyle={{ justifyContent: 'center' }}
        />
    ) : (
        <>
            <Helmet>
                <title>{post.title} | My App</title>
            </Helmet>
            <ImageBanner image={imageBanner} title={post.title} />
            <div className="post-content">
                <div className="image-holder">
                    <div className="image-block">
                        <img src={post.thumbnail} alt={post.title} />
                    </div>
                    <div className="tag-block">
                        <strong>Tag</strong> {post.tag}
                    </div>
                    <div className="categories-block">
                        <strong>Categories</strong> {post.categories}
                    </div>
                </div>
                <div className="text-holder">
                    <ul className="meta-info">
                        <li>Views: {post.views}</li>
                        <li>Likes: {like}</li>
                    </ul>
                    <div className="slug-block">
                        <p>
                            <strong>{post.slug}</strong>
                        </p>
                    </div>
                    <div
                        className="text-block"
                        dangerouslySetInnerHTML={{ __html: post.body }}
                    />
                    <button
                      type="button"
                      className="btn-like"
                      onClick={handleLike}
                    >
                        Like <Like />
                    </button>
                </div>
                <Comments id={post._id} />
            </div>
        </>
    );
}

export default Post;
