import React, { useState, Suspense } from 'react';

import { TasksForm } from '../../../components/Tasks';
import Loading from '../../../components/Loading';

const TaskList = React.lazy(() => import('../../../components/Tasks/TaskList'));

function Tasks() {
    const [tasks, setTasks] = useState([]);
    const [id, setId] = useState(1);

    const addedTasks = (title) => {
        setId((prev) => prev + 1);
        setTasks([
            ...tasks,
            {
                id,
                title,
                pinned: false,
                status: false,
            },
        ]);
    };

    const updateTasks = (e, id, key, title) => {
        e.preventDefault();
        if (key === 'edit') {
            const updateTasks = tasks.map((task) =>
                task.id === id ? { ...task, title } : task
            );
            setTasks(updateTasks);
        } else {
            const updateTasks = tasks.map((task) =>
                task.id === id ? { ...task, [key]: !task[key] } : task
            );
            setTasks(updateTasks);
        }
    };

    const removeTasks = (e, id) => {
        e.preventDefault();
        const updateTasks = tasks.filter((task) => task.id !== id);
        setTasks(updateTasks);
    };

    return (
        <>
            <h1 className="dashboard-title">Tasks</h1>
            {tasks.length ? (
                <Suspense fallback={<Loading />}>
                    <TaskList
                        tasks={tasks}
                        updateTasks={updateTasks}
                        removeTasks={removeTasks}
                    />
                </Suspense>
            ) : (
                <div className="no-tasks">No tasks</div>
            )}

            <TasksForm addedTasks={addedTasks} />
        </>
    );
}

export default Tasks;
