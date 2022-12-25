import React, {useEffect, useState} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { BallTriangle } from  'react-loader-spinner'

import ImageBanner from "components/ImageBanner";

import {URL_BEERS, BEERS_LOADING, BEERS_COMPLETE, BEERS_ERROR} from '../../../constants';

import imageBanner from 'assets/images/image01.jpg';

import './Post.scss';

function Post() {
  const [beer, setBeer] = useState({});
  const [status, setStatus] = useState(BEERS_LOADING);

  const getBeers = (params) => {
    setStatus(BEERS_LOADING);
    axios
      .get(URL_BEERS, {
        params: {...params}
      })
      .then( ({ data }) => {
        setBeer(data[0]);
        setStatus(BEERS_COMPLETE);
      })
      .catch((error) => {
        setStatus(BEERS_ERROR);
        console.log(error)
      })
  }

  const {id} = useParams();

  useEffect(() => {
    getBeers({
      ids: id
    })
  }, [])

  if (status === BEERS_ERROR) {
    return (
      <React.Fragment>
        <ImageBanner image={imageBanner} />
        <div className='container'>
          <h1 style={{textAlign: 'center', margin: '50px 0'}}>Oops, something went wrong</h1>
        </div>
      </React.Fragment>
    )
  }

  return (
    status === BEERS_LOADING
      ? <BallTriangle
          color="#5458F7"
          wrapperStyle={{justifyContent: 'center'}}
        />
      : <React.Fragment>
          <ImageBanner image={imageBanner} title={beer.name} />
          <div className="post-content">
            <div className="image-holder">
              <img src={beer.image_url} alt={beer.name} />
            </div>
            <div className="text-holder">
              <p><strong>{beer.tagline}</strong></p>
              <p>{beer.description}</p>
              <blockquote>{beer.brewers_tips}</blockquote>
            </div>
          </div>
        </React.Fragment>
  );
}

export default Post;
