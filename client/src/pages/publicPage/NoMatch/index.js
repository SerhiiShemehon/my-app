import { Helmet } from 'react-helmet';

import ImageBanner from '../../../components/ImageBanner';
import imageBanner from '../../../assets/images/image02.jpg';

function NoMatch() {
    return (
        <>
            <Helmet>
                <title>404 Page | My App</title>
            </Helmet>
            <ImageBanner
                image={imageBanner}
                title="404"
                link={{ url: '/', title: 'Go to Homepage' }}
            />
        </>
    );
}

export default NoMatch;
