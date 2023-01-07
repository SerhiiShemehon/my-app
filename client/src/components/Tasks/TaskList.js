import React from 'react';
import TaskItem from './TaskItem';

import './Tasks.scss';

const TaskList = ({
  tasks,
  updateTasks,
  removeTasks
}) => {
 return (
   <div className={'task-list'}>
     {tasks.map(task => <TaskItem key={task.id} task={task} updateTasks={updateTasks} removeTasks={removeTasks} />)}
   </div>
 )
}

export default TaskList;

