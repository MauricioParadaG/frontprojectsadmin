import React, {useContext} from 'react';
import ProjectComponent from './Project.component';
import {ProjectContext} from '../../context/projects/projectContext';

const ListedProjectsComponent = () => {

    //useContext State-> projectsContext.newProjectsState
    const projectsContext = useContext(ProjectContext);

    if (projectsContext.newProjectsState.length === 0) return null; 

    return (
        <ul className="listed-projects">
            {projectsContext.newProjectsState.map(project =>(
            <ProjectComponent
            key={project.id}
            newProjectsState={project}
            />
        ))}
        </ul>
    )
}

export default ListedProjectsComponent;
