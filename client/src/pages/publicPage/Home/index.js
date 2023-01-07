import React, {useEffect, useState} from 'react';
import axios from 'axios';

import ImageBanner from 'components/ImageBanner';
import Loading from 'components/Loading';
import {PostWrapper, PostFilter, PostList, PostItem, PostPagination, PostItemBig} from 'components/Posts';

import * as Constants from 'constants';
import imageBanner from 'assets/images/image01.jpg';

function Home() {
  const [beers, setBeers] = useState([]);
  const [isCompleted, setIsCompleted] = useState(false);
  const [status, setStatus] = useState(Constants.BEERS_LOADING);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);

  const updateBeersWithMore = (data, array) => {
    setPage((prevPage) => prevPage + 1);
    setBeers([...array, ...data]);
    setIsCompleted(data.length > 0)
    setStatus(Constants.BEERS_COMPLETE);
  }

  const updateBeers = (data) => {
    setBeers([...data]);
    setIsCompleted(false)
    setStatus(Constants.BEERS_COMPLETE);
  }

  const getBeers = (params, more = false, array = beers) => {
    setStatus(Constants.BEERS_LOADING);
    axios
      .get(Constants.URL_BEERS, {
        params: {...params}
      })
      .then( ({ data }) => {
        if (more) {
          updateBeersWithMore(data, array)
        } else {
          updateBeers(data)
        }
      })
      .catch((error) => {
        setStatus(Constants.BEERS_ERROR);
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
    <>
      <ImageBanner image={imageBanner} />
      <PostWrapper>
        <PostFilter filterChange={filterChange} />
        {status === Constants.BEERS_ERROR
          ? (<div className={'container'}>
              <h1 style={{textAlign: 'center', margin: '50px 0'}}>Oops, something went wrong</h1>
            </div>)
          : (<>
              <PostList>
                {beers.map((item, index) => (
                  index === 0
                    ? <div key={item.id} className={'post-item'}><PostItemBig {...item} /></div>
                    : <div key={item.id} className={'post-item'}><PostItem {...item} /></div>
                ))}
              </PostList>
              {status === Constants.BEERS_LOADING
                ? <Loading />
                : isCompleted ? <PostPagination onClick={loadMoreBeers} /> : null
              }
            </>)
        }
      </PostWrapper>
    </>
  );
}

export default Home;

