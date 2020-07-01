import React from 'react';

const TaskComponent = props => {
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
                    >
                        Delete
                    </button>
                </div>

          </li>
          
        </>
    )
}

export default TaskComponent;
