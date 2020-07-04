import React, {useContext} from 'react';
import {ProjectContext} from '../../context/projects/projectContext';

const ProjectComponent = props => {

    const projectsContext = useContext(ProjectContext);

    const onClick = () => {
        projectsContext.setselectedProjectState(props.newProjectsState.id)
    }

    return (
        <li>
            
            <button
            type="button"
            className="btn btn-blank"
            onClick={onClick}
            >
                {props.newProjectsState.name}
            </button>
        </li>
    )
}

export default ProjectComponent;
