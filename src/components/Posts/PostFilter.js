import React from "react";

function PostFilter({children}) {
  return (
    <div className='posts-filter'>
      <select name="categories">
        <option value="categories">Categories</option>
        <option value="categories 1">Categories 1</option>
        <option value="categories 2">Categories 2</option>
        <option value="categories 3">Categories 3</option>
      </select>
      <select name="tags">
        <option value="tags">Tags</option>
        <option value="tags 1">Tags 1</option>
        <option value="tags 2">Tags 2</option>
        <option value="tags 3">Tags 3</option>
      </select>
      <input type="search" placeholder='Search Article' />
    </div>
  )
}

export default PostFilter