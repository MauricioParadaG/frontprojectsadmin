import React from 'react';
import {Link} from 'react-router-dom';
import SidebarComponent from '../layout/Sidebar.component';
import HeaderComponent from '../layout/Header.component';
import FormTaskComponent from '../tasks/FormTask.component';

const ProjectsComponent = () => {
    return (
        <div className="container-app">
            <aside>
                <SidebarComponent/>
            </aside>

            <div className="section-main">
                <HeaderComponent/>

                <main>
                <FormTaskComponent/>
                    <div className="container-tasks">
                        
                    </div>
                </main>
            </div>
        </div>
    )
}

export default ProjectsComponent;
