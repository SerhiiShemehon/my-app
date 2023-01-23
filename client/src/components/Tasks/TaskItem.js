import React, { useState, useEffect } from 'react';

import { ReactComponent as Star } from '../../assets/icons/star.svg';
import { ReactComponent as Pin } from '../../assets/icons/pin.svg';
import { ReactComponent as Pencil } from '../../assets/icons/pencil.svg';
import { ReactComponent as Circle } from '../../assets/icons/circle.svg';
import { Form, Input } from '../Form';

const TaskItem = ({ task, updateTasks, removeTasks }) => {
    const [edit, setEdit] = useState(false);
    const [title, setTitle] = useState('');

    useEffect(() => {
        setTitle(task.task);
    }, [task]);

    const editTasks = (e) => {
        e.preventDefault();
        setEdit(false);
        updateTasks(e, task._id, 'edit', title);
    };

    const handleChange = (e) => {
        setTitle(e.target.value);
    };

    return !edit ? (
        <div
            className={`task-item ${task.completed ? 'task-completed' : null} ${
                task.pinned ? 'task-pinned' : null
            }`}
            id={task._id}
        >
            <button
                className="status-block"
                onClick={(e) => updateTasks(e, task._id, 'completed')}
            >
                <Star />
            </button>
            <h2 className="title-block">{task.task}</h2>
            <div className="setting-block">
                <button
                    className="pinned-block"
                    onClick={(e) => updateTasks(e, task._id, 'pinned')}
                >
                    <Pin />
                </button>
                <button className="edit-block" onClick={() => setEdit(true)}>
                    <Pencil />
                </button>
                <button
                    className="remove-block"
                    onClick={(e) => removeTasks(e, task._id)}
                >
                    <Circle />
                </button>
            </div>
        </div>
    ) : (
        <div className="task-form">
            <Form handleSubmit={editTasks}>
                <Input handleChange={handleChange} value={title} name="title" />
                <button type="submit">edit</button>
            </Form>
        </div>
    );
};

export default TaskItem;
