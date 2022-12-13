import React from "react";

import ImageBanner from "components/ImageBanner";
import imageBanner from 'assets/images/image02.jpg';

function NoMatch() {
  return (
    <ImageBanner image={imageBanner} title={'404'} link={{url: '/', title: 'Go to Homepage'}} />
  );
}

export default NoMatch;
