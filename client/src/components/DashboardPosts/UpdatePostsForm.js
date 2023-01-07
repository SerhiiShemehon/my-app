import React, {useState, useEffect} from 'react'
import {Form, Input, Select, Textarea} from 'components/Form';

const UpdatePostsForm = ({
  post,
  updatePosts,
  closeModal
}) => {
  const [currentPost, setCurrentPost] = useState({})

  useEffect(() => {
    setCurrentPost({
      title: post.title,
      description: post.description,
      status: post.status,
      date: post.date,
      author: post.author
    })
  }, [post])

  const handleSubmit = (e) => {
    updatePosts(e, post.id, {
      title: e.target[0].value,
      description: e.target[4].value,
      status: e.target[2].value,
      date: e.target[3].value,
      author: e.target[1].value
    } )
    closeModal();
  }

  const handleChange = (e) => {
    setCurrentPost( prevPost => ({
      ...currentPost,
          [e.target.name]: e.target.value
      })
    )
  }

  return (
    <div className={'post-form'}>
      <h2 className={'title-block'}>Edit a Post</h2>
      <Form handleSubmit={handleSubmit}>
        <Input
          type={'text'}
          placeholder={'Title'}
          name={'title'}
          value={currentPost.title}
          handleChange={handleChange}
          required
          className={'col-6'}
        />
        <Input
          type={'text'}
          placeholder={'Author'}
          name={'author'}
          value={currentPost.author}
          handleChange={handleChange}
          required
          className={'col-6'}
        />
        <Select
          name={'status'}
          options={['Publish', 'Future', 'Draft']}
          firstOption={'Status'}
          value={currentPost.status}
          handleChange={handleChange}
          className={'col-6'}
        />
        <Input
          type={'text'}
          placeholder={'Date'}
          name={'date'}
          value={currentPost.date}
          handleChange={handleChange}
          required
          className={'col-6'}
        />
        <Textarea
          placeholder={'Body'}
          required
          value={currentPost.description}
          handleChange={handleChange}
          name={'description'}
        />
        <button type={'submit'} className={'btn-second'}>Submit</button>
      </Form>
    </div>
  )
}

export default UpdatePostsForm;
