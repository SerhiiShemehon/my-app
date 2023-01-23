import { Form, Input, Textarea } from '../Form';

const PostsForm = ({ addedPosts, closeModal }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        addedPosts({
            title: e.target[0].value,
            body: e.target[4].value,
            categories: e.target[2].value,
            tag: e.target[3].value,
            slug: e.target[1].value
        });
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
                    required
                    className="col-6"
                />
                <Input
                    type="text"
                    placeholder="Slug"
                    name="slug"
                    required
                    className="col-6"
                />
                <Input
                  type="text"
                  placeholder="Categories"
                  name="categories"
                  required
                  className="col-6"
                />
                <Input
                    type="text"
                    placeholder="Tag"
                    name="tag"
                    required
                    className="col-6"
                />
                <Textarea placeholder="Body" required name="body" />
                <button type="submit" className="btn-second">
                    Submit
                </button>
            </Form>
        </div>
    );
};

export default PostsForm;
