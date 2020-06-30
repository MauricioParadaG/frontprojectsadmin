import React from 'react';
import {Link} from 'react-router-dom';
import SidebarComponent from '../layout/Sidebar.component';

const ProjectsComponent = () => {
    return (
        <div className="container-app">
            <aside>
                <SidebarComponent/>
            </aside>

            <div className="section-main">
                <main>
                    <div className="container-tasks">
                
                    </div>
                </main>
            </div>
        </div>
    )
}

export default ProjectsComponent;
