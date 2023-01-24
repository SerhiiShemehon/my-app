import React, { useEffect, useState } from 'react';

import ImageBanner from '../../../components/ImageBanner';
import Loading from '../../../components/Loading';
import {
    PostWrapper,
    PostList,
    PostItem,
    PostItemBig,
} from '../../../components/Posts';

import * as Constants from '../../../constants';
import imageBanner from '../../../assets/images/image01.jpg';

function Home() {
    const [posts, setPosts] = useState([]);
    const [status, setStatus] = useState(Constants.LOADING);

    useEffect(() => {
        window.scrollTo(0, 0);
        setStatus(Constants.LOADING);
        fetch(Constants.URL_POSTS_BASE)
          .then((res) => res.json())
          .then((data) => {
              setPosts(data.data);
              setStatus(Constants.COMPLETE);
          });
    }, []);

    return (
        <>
            <ImageBanner image={imageBanner} />
            <PostWrapper>
                {status === Constants.ERROR ? (
                    <div className="container">
                        <h1 style={{ textAlign: 'center', margin: '50px 0' }}>
                            Oops, something went wrong
                        </h1>
                    </div>
                ) : (
                    <>
                        <PostList>
                            {posts.map((item, index) =>
                                index === 0 ? (
                                    <div key={item._id} className="post-item">
                                        <PostItemBig {...item} />
                                    </div>
                                ) : (
                                    <div key={item._id} className="post-item">
                                        <PostItem {...item} />
                                    </div>
                                )
                            )}
                        </PostList>
                        {status === Constants.LOADING
                          ? ( <Loading /> )
                          : null}
                    </>
                )}
            </PostWrapper>
        </>
    );
}

export default Home;
