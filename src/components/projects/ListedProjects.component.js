import React from 'react';
import ProjectComponent from './Project.component';

const ListedProjectsComponent = () => {

    const newProjects = [
        {name: 'Project A'},
        {name: 'Project B'},
        {name: 'Project C'}
    ];

    return (
        <ul className="listed-projects">
            {newProjects.map(project =>(
            <ProjectComponent
            newProjectsState={project}
            />
        ))}
        </ul>
    )
}

export default ListedProjectsComponent;
