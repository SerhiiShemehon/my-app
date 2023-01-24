import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { BallTriangle } from 'react-loader-spinner';

import { useFetch } from '../../../hook/useFetch';

import ImageBanner from '../../../components/ImageBanner';

import imageBanner from '../../../assets/images/image01.jpg';

import './Post.scss';
import * as Constants from '../../../constants';

function Post() {
    const { id } = useParams();
    const [post, setPost] = useState({});
    const [status, setStatus] = useState(Constants.LOADING);

    useEffect(() => {
        window.scrollTo(0, 0);
        setStatus(Constants.LOADING);
        fetch(Constants.URL_POSTS_BASE + id)
          .then((res) => res.json())
          .then((data) => {
              setPost(data);
              setStatus(Constants.COMPLETE);
          })
          .catch(()=>setStatus(Constants.ERROR));
    }, []);

    if (status === Constants.ERROR) {
        return (
            <>
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
            <ImageBanner image={imageBanner} title={post.title} />
            <div className="post-content">
                <div className="image-holder">
                    <img src={post.image_url} alt={post.title} />
                </div>
                <div className="text-holder">
                    <p>
                        <strong>{post.slug}</strong>
                    </p>
                    <p>{post.body}</p>
                    <div><strong>Tag</strong> {post.tag}</div>
                    <div><strong>Categories</strong> {post.categories}</div>
                </div>
            </div>
        </>
    );
}

export default Post;
