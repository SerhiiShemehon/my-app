import React, {useEffect, useState} from "react";
import axios from "axios";
import { BallTriangle } from  'react-loader-spinner'

import ImageBanner from "components/ImageBanner";
import {PostWrapper, PostFilter, PostList, PostItem, PostPagination, PostItemBig} from "components/Posts";

import {URL_BEERS, BEERS_LOADING, BEERS_COMPLETE, BEERS_ERROR} from 'constants.js';

import imageBanner from 'assets/images/image01.jpg';

function Home() {
  const [beers, setBeers] = useState([]);
  const [isCompleted, setIsCompleted] = useState(false);
  const [status, setStatus] = useState(BEERS_LOADING);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);

  const getBeers = (params, more = false, array = beers) => {
    setStatus(BEERS_LOADING);
    axios
      .get(URL_BEERS, {
        params: {...params}
      })
      .then( ({ data }) => {
        if (more) {
          setPage((prevPage) => prevPage + 1);
          setBeers([...array, ...data]);
          setIsCompleted(data.length > 0)
          setStatus(BEERS_COMPLETE);
        } else {
          setBeers([...data]);
          setIsCompleted(false)
          setStatus(BEERS_COMPLETE);
        }
      })
      .catch((error) => {
        setStatus(BEERS_ERROR);
        console.log(error)
      })
  }

  useEffect(() => {
    getBeers({
      page,
      per_page: perPage
    }, true)
  }, [])

  const loadMoreBeers = () => {
    getBeers({
      page,
      per_page: perPage
    }, true)
  }

  const filterChange = (params) => {
    setPage(1);
    if (Object.keys(params).length) {
      getBeers({
        ...params
      })
    } else {
      getBeers({
        page,
        per_page: perPage
      }, true, [])
    }
  }

  return (
    <React.Fragment>
      <ImageBanner image={imageBanner} />
      <PostWrapper>
        <PostFilter filterChange={filterChange} />
        {status === BEERS_ERROR
          ? <div className='container'>
              <h1 style={{textAlign: 'center', margin: '50px 0'}}>Oops, something went wrong</h1>
            </div>
          : <React.Fragment>
              <PostList>
                {beers.map((item, index) => (
                  index === 0
                    ? <div key={item.id} className='post-item'><PostItemBig {...item} /></div>
                    : <div key={item.id} className='post-item'><PostItem {...item} /></div>
                ))}
              </PostList>
              {status === BEERS_LOADING
                ? <BallTriangle
                  color="#5458F7"
                  wrapperStyle={{justifyContent: 'center'}}
                />
                : isCompleted && <PostPagination onClick={loadMoreBeers} />
              }
            </React.Fragment>
        }

      </PostWrapper>
    </React.Fragment>
  );
}

export default Home;
