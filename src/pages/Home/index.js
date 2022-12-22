import React from "react";

import ImageBanner from "components/ImageBanner";

import imageBanner from 'assets/images/image01.jpg';

function Home() {
  return (
    <>
      <ImageBanner image={imageBanner} />
    </>
  );
}

export default Home;
