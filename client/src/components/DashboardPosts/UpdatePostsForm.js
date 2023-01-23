import React, { useState, useEffect } from 'react';
import { Form, Input, Textarea } from '../Form';

const UpdatePostsForm = ({ post, updatePosts, closeModal }) => {
    const [currentPost, setCurrentPost] = useState({});

    useEffect(() => {
        setCurrentPost({
            title: post.title,
            body: post.body,
            categories: post.categories,
            tag: post.tag,
            slug: post.slug,
        });
    }, [post]);

    const handleSubmit = (e) => {
        updatePosts(e, post._id, {
            title: e.target[0].value,
            body: e.target[4].value,
            categories: e.target[2].value,
            tag: e.target[3].value,
            slug: e.target[1].value,
        });
        closeModal();
    };

    const handleChange = (e) => {
        setCurrentPost((prevPost) => ({
            ...currentPost,
            [e.target.name]: e.target.value,
        }));
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
                    handleChange={handleChange}
                    required
                    className={'col-6'}
                />
                <Input
                    type={'text'}
                    placeholder={'Slug'}
                    name={'slug'}
                    value={currentPost.slug}
                    handleChange={handleChange}
                    required
                    className={'col-6'}
                />
                <Input
                  type={'text'}
                  placeholder={'Categories'}
                  name={'categories'}
                  value={currentPost.categories}
                  handleChange={handleChange}
                  required
                  className={'col-6'}
                />
                <Input
                    type={'text'}
                    placeholder={'Tag'}
                    name={'tag'}
                    value={currentPost.tag}
                    handleChange={handleChange}
                    required
                    className={'col-6'}
                />
                <Textarea
                    placeholder={'Body'}
                    required
                    value={currentPost.body}
                    handleChange={handleChange}
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
