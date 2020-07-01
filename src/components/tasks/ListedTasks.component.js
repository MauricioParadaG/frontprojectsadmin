import React from 'react';
import TaskComponent from './Task.component';

const ListedTasksComponent = () => {

    const newTasks = [
        {name: 'Task 1', completed: true},
        {name: 'Task 2', completed: false},
        {name: 'Task 3', completed: true},
        {name: 'Task 4', completed: false},
    ];

    return (
        <>
            <h2>Project: ProjectB</h2>

            <ul className="listed-tasks">

            { newTasks.length === 0 ?
            <li className="task"><p>There is not a task created yet</p></li>
            :
            newTasks.map(task =>(
            <TaskComponent
            newTasksState={task}
            />
        ))}
            </ul>
        
            <button type="button"
                className="btn btn-primary"
                >
                Delete Project &times;
            </button>

        </>
    )
}

export default ListedTasksComponent;
