import React, { useState, useEffect, Suspense } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet';

import { TasksForm } from '../../../components/Tasks';
import Loading from '../../../components/Loading';
import * as Constants from '../../../constants';

const TaskList = React.lazy(() => import('../../../components/Tasks/TaskList'));

function Tasks() {
    const [tasks, setTasks] = useState([]);
    const [updatePage, setUpdatePage] = useState(true);

    const fetchData = async () => {
        try {
            const res = await axios(Constants.URL_TASK_BASE);
            const data = await res.data;
            setTasks(data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [updatePage]);

    const addTasks = async (title) => {
        try {
            const res = await axios.post(
                Constants.URL_TASK_BASE,
                {
                    task: title,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );
            const data = await res.data;
            setTasks([...tasks, data]);
        } catch (error) {
            console.error(error);
        }
    };

    const updateTasks = async (e, id, key, title) => {
        e.preventDefault();
        if (key === 'edit') {
            try {
                await axios.patch(
                    `${Constants.URL_TASK_BASE}${id}`,
                    {
                        task: title,
                    },
                    {
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    }
                );
                const updateCurrentTask = tasks.map((elem) =>
                    elem._id === id ? { ...elem, task: title } : elem
                );
                setTasks(updateCurrentTask);
            } catch (error) {
                console.error(error);
            }
        } else {
            try {
                const updateCurrentTask = tasks.map((elem) =>
                    elem._id === id ? { ...elem, [key]: !elem[key] } : elem
                );
                const updateTask = tasks.find((elem) => elem._id === id);
                updateTask[key] = !updateTask[key];
                setTasks(updateCurrentTask);
                await axios.patch(
                    `${Constants.URL_TASK_BASE}${id}`,
                    updateTask,
                    {
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    }
                );
            } catch (error) {
                console.error(error);
            }
        }
    };

    const removeTasks = async (e, id) => {
        e.preventDefault();
        try {
            await axios.delete(`${Constants.URL_TASK_BASE}${id}`);
            setUpdatePage(!updatePage);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <Helmet>
                <title>Tasks | My App</title>
            </Helmet>
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

            <TasksForm addTasks={addTasks} />
        </>
    );
}

export default Tasks;
