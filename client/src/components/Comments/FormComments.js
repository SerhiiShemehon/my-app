import {useState} from "react";
import ReactQuill from "react-quill";
import { Form } from '../Form';

const FormComments = ({addComments}) => {
  const [newComment, setNewComments] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    addComments(newComment);
    setNewComments('')
  };

  const handleTextChange = (e) => {
    setNewComments(e)
  };

  return (
    <div className="form-comments">
      <Form handleSubmit={handleSubmit}>
        <ReactQuill
          theme="snow"
          value={newComment}
          onChange={handleTextChange}
          className="form-input-comments"
        />
        <button type="submit" className="btn-second">
          Submit
        </button>
      </Form>
    </div>
  )
}

export default FormComments;