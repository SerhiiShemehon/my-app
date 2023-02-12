import TaskItem from './TaskItem';

import './Tasks.scss';

function TaskList({ tasks, updateTasks, removeTasks }) {
    return (
        <div className="task-list">
            {tasks.map((task) => (
                <TaskItem
                    key={task._id}
                    task={task}
                    updateTasks={updateTasks}
                    removeTasks={removeTasks}
                />
            ))}
        </div>
    );
}

export default TaskList;
