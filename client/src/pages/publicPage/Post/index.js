import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { BallTriangle } from 'react-loader-spinner';

import { useFetch } from '../../../hook/useFetch';

import ImageBanner from '../../../components/ImageBanner';

import imageBanner from '../../../assets/images/image01.jpg';

import './Post.scss';
import * as Constants from '../../../constants';

function Post() {
    const { id } = useParams();
    const { response, error, loading } = useFetch({
        method: 'GET',
        url: Constants.URL_BEERS,
        params: {
            ids: id,
        },
    });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (error || (!loading && Array.isArray(response) && !response.length)) {
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

    return loading ? (
        <BallTriangle
            color="#5458F7"
            wrapperStyle={{ justifyContent: 'center' }}
        />
    ) : (
        <>
            <ImageBanner image={imageBanner} title={response[0].name} />
            <div className="post-content">
                <div className="image-holder">
                    <img src={response[0].image_url} alt={response[0].name} />
                </div>
                <div className="text-holder">
                    <p>
                        <strong>{response[0].tagline}</strong>
                    </p>
                    <p>{response[0].description}</p>
                    <blockquote>{response[0].brewers_tips}</blockquote>
                </div>
            </div>
        </>
    );
}

export default Post;
