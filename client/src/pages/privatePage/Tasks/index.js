import React, { useState, useEffect, Suspense } from "react";

import { TasksForm } from "../../../components/Tasks";
import Loading from "../../../components/Loading";
import * as Constants from "../../../constants";
import { URL_TASK_BASE } from "../../../constants";

const TaskList = React.lazy(() => import("../../../components/Tasks/TaskList"));

function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [updatePage, setUpdatePage] = useState(true);

  useEffect(() => {
    fetch(Constants.URL_TASK_BASE)
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, [updatePage]);

  const addedTasks = (title) => {
    fetch(Constants.URL_TASK_BASE, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        task: title,
      }),
    })
      .then((res) => res.json())
      .then((data) => setTasks([...tasks, data]));
  };

  const updateTasks = (e, id, key, title) => {
    e.preventDefault();
    if (key === "edit") {
      const updateTasks = tasks.map((elem) =>
        elem._id === id ? { ...elem, task: title } : elem
      );
      setTasks(updateTasks);
      fetch(Constants.URL_TASK_BASE + id, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          task: title,
        }),
      }).then((res) => res.json());
    } else {
      const updateTasks = tasks.map((elem) =>
        elem._id === id ? { ...elem, [key]: !elem[key] } : elem
      );
      const updateTask = tasks.find((elem) => elem._id === id);
      updateTask[key] = !updateTask[key];
      setTasks(updateTasks);
      fetch(Constants.URL_TASK_BASE + id, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateTask),
      }).then((res) => res.json());
    }
  };

  const removeTasks = (e, id) => {
    e.preventDefault();
    fetch(Constants.URL_TASK_BASE + id, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => setUpdatePage(!updatePage));
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
