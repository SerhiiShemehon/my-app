import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Form, Input } from '../Form';

function PostsForm({ addedPosts, closeModal }) {
    const [newPost, setNewPost] = useState({
        title: '',
        body: '',
        categories: '',
        tag: '',
        slug: '',
        thumbnail: null,
    });

    const handleChange = (e) => {
        setNewPost({
            ...newPost,
            [e.target.name]: e.target.value,
        });
    };

    const handleFileChange = (e) => {
        setNewPost({
            ...newPost,
            thumbnail: e.target.files[0],
        });
    };

    const handleTextChange = (e) => {
        setNewPost({
            ...newPost,
            body: e,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addedPosts(newPost);
        closeModal();
    };

    return (
        <div className="post-form">
            <h2 className="title-block">Create a Post</h2>
            <Form handleSubmit={handleSubmit}>
                <Input
                    type="text"
                    placeholder="Title"
                    name="title"
                    value={newPost.title}
                    onChange={handleChange}
                    required
                    className="col-6"
                />
                <Input
                    type="text"
                    placeholder="Slug"
                    name="slug"
                    value={newPost.slug}
                    onChange={handleChange}
                    required
                    className="col-6"
                />
                <Input
                    type="text"
                    placeholder="Categories"
                    name="categories"
                    value={newPost.categories}
                    onChange={handleChange}
                    required
                    className="col-6"
                />
                <Input
                    type="text"
                    placeholder="Tag"
                    name="tag"
                    value={newPost.tag}
                    onChange={handleChange}
                    required
                    className="col-6"
                />
                <ReactQuill
                    theme="snow"
                    value={newPost.body}
                    onChange={handleTextChange}
                    className="col-12"
                />
                <Input
                    type="file"
                    name="thumbnail"
                    onChange={handleFileChange}
                    required
                    className="col-12"
                />
                <button type="submit" className="btn-second">
                    Submit
                </button>
            </Form>
        </div>
    );
}

export default PostsForm;
