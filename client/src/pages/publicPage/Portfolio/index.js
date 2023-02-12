import { Helmet } from 'react-helmet';

import ImageBanner from '../../../components/ImageBanner';
import imageBanner from '../../../assets/images/image03.jpg';

function Portfolio() {
    return (
        <>
            <Helmet>
                <title>Portfolio | My App</title>
            </Helmet>
            <ImageBanner image={imageBanner} title="Portfolio" />
        </>
    );
}

export default Portfolio;
