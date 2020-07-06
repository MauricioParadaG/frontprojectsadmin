import React, {useContext} from 'react';
import {taskContext} from '../../context/task/taskContext';
//import {ProjectContext} from '../../context/projects/projectContext';

const TaskComponent = props => {

    //const projectsContext = useContext(ProjectContext);
    const tasksContext = useContext(taskContext);

    const onClickDelete = () => {
        tasksContext.setDeleteTask(props.newTasksState.id);
        tasksContext.setNewTasksState(props.newTasksState.projectId);
    }

    return (
        <>
          <li className="task shadow">
            <p>{props.newTasksState.name}</p>  

            <div className="status">
                {props.newTasksState.completed ? 
                
                <button type="button"
                className="complete"
                >Completed</button>
                
                : 
                <button type="button"
                className="incomplete"
                >Not Completed</button>
                }
            </div>

                <div className="actions">
                    <button type="button"
                    className="btn btn-primary"
                    >
                        Edit
                    </button>

                    <button type="button"
                    className="btn btn-secondary"
                    onClick={onClickDelete} 
                    >
                        Delete
                    </button>
                </div>

          </li>
          
        </>
    )
}

export default TaskComponent;
