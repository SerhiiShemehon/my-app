import React from "react";


function PostList({children}) {
  return (
    <div className='posts-list'>
      {children}
    </div>
  )
}

export default PostList