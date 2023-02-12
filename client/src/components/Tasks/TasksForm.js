import React, { useState } from 'react';
import { Form, Input } from '../Form';

const TasksForm = ({ addTasks }) => {
    const [characterLength, setCharacterLength] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (e.target[0].value.length > 2) {
            addTasks(e.target[0].value);
            e.target[0].value = '';
            setCharacterLength(false);
        } else {
            setCharacterLength(true);
        }
    };

    return (
        <div className="task-form">
            <Form handleSubmit={handleSubmit}>
                <Input placeholder="Type here..." name="title" />
                <button type="submit">submit</button>
                {characterLength ? (
                    <div className="error-input">more than three symbols</div>
                ) : null}
            </Form>
        </div>
    );
};

export default TasksForm;
