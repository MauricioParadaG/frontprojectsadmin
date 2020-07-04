import React, {useContext} from 'react';
import TaskComponent from './Task.component';

import {ProjectContext} from '../../context/projects/projectContext';

const ListedTasksComponent = () => {

    const projectsContext = useContext(ProjectContext);

    // Checking that a project got selected
    if(!projectsContext.selectedProjectState) return <h2>Select a project</h2>;

    const [actualProject] = projectsContext.selectedProjectState;

    const newTasks = [
        {name: 'Task 1', completed: true},
        {name: 'Task 2', completed: false},
        {name: 'Task 3', completed: true},
        {name: 'Task 4', completed: false},
    ];

    const onClick = () => {
        projectsContext.setDeleteProjectState(actualProject.id)
    }

    return (
        <>
            <h2>Project: {actualProject.name}</h2>

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
                onClick = {onClick}
                >
                Delete Project &times;
            </button>

        </>
    )
}

export default ListedTasksComponent;
