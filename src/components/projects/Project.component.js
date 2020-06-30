import React from 'react';

const ProjectComponent = props => {
    return (
        <li>
            
            <button
            type="button"
            className="btn btn-blank"
            >
                {props.newProjectsState.name}
            </button>
        </li>
    )
}

export default ProjectComponent;
