import React from 'react'
import {Form, Input, Select, Textarea} from 'components/Form';

const PostsForm = ({addedPosts, closeModal}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    addedPosts({
      title: e.target[0].value,
      description: e.target[4].value,
      status: e.target[2].value,
      date: e.target[3].value,
      author: e.target[1].value
    })
    closeModal();
  }

  return (
    <div className={'post-form'}>
      <h2 className={'title-block'}>Create a Post</h2>
      <Form handleSubmit={handleSubmit}>
        <Input
          type={'text'}
          placeholder={'Title'}
          name={'title'}
          required
          className={'col-6'}
        />
        <Input
          type={'text'}
          placeholder={'Author'}
          name={'author'}
          required
          className={'col-6'}
        />
        <Select
          name={'status'}
          options={['Publish', 'Future', 'Draft']}
          firstOption={'Status'}
          className={'col-6'}
        />
        <Input
          type={'text'}
          placeholder={'Date'}
          name={'date'}
          required
          className={'col-6'}
        />
        <Textarea
          placeholder={'Body'}
          required
          name={'description'}
        />
        <button type={'submit'} className={'btn-second'}>Submit</button>
      </Form>
    </div>
  )
}

export default PostsForm;
