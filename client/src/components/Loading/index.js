import React from 'react';
import { BallTriangle } from  'react-loader-spinner'


const Loading = () => {
  return (
    <BallTriangle
      color={'#5458F7'}
      height={'50'}
      width={'50'}
      wrapperStyle={{justifyContent: 'center'}}
    />
  )
}

export default Loading