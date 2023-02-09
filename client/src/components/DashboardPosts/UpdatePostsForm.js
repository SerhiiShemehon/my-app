import React, { useState } from 'react';
import { Form, Input, Textarea } from '../Form';

const UpdatePostsForm = ({ post, updatePosts, closeModal }) => {
    const [currentPost, setCurrentPost] = useState({
        title: post.title,
        body: post.body,
        categories: post.categories,
        tag: post.tag,
        slug: post.slug,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        updatePosts(e, post._id, currentPost);
        closeModal();
    };

    const handleChange = (e) => {
        setCurrentPost({
            ...currentPost,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className={'post-form'}>
            <h2 className={'title-block'}>Edit a Post</h2>
            <Form handleSubmit={handleSubmit}>
                <Input
                    type={'text'}
                    placeholder={'Title'}
                    name={'title'}
                    value={currentPost.title}
                    onChange={handleChange}
                    required
                    className={'col-6'}
                />
                <Input
                    type={'text'}
                    placeholder={'Slug'}
                    name={'slug'}
                    value={currentPost.slug}
                    onChange={handleChange}
                    required
                    className={'col-6'}
                />
                <Input
                  type={'text'}
                  placeholder={'Categories'}
                  name={'categories'}
                  value={currentPost.categories}
                  onChange={handleChange}
                  required
                  className={'col-6'}
                />
                <Input
                    type={'text'}
                    placeholder={'Tag'}
                    name={'tag'}
                    value={currentPost.tag}
                    onChange={handleChange}
                    required
                    className={'col-6'}
                />
                <Textarea
                    placeholder={'Body'}
                    required
                    value={currentPost.body}
                    onChange={handleChange}
                    name={'body'}
                />
                <button type={'submit'} className={'btn-second'}>
                    Submit
                </button>
            </Form>
        </div>
    );
};

export default UpdatePostsForm;
