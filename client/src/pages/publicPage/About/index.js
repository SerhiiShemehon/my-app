import React from 'react';
import { Helmet } from 'react-helmet';

import ImageBanner from '../../../components/ImageBanner';
import imageBanner from '../../../assets/images/image03.jpg';

function About() {
    return (
        <>
            <Helmet>
                <title>About | My App</title>
            </Helmet>
            <ImageBanner image={imageBanner} title="About" />
        </>
    );
}

export default About;
