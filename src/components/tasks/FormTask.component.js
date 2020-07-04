import React, {useContext} from 'react';
import {ProjectContext} from '../../context/projects/projectContext';

const FormTaskComponent = () => {

    const projectsContext = useContext(ProjectContext);

    // Checking that a project got selected
    if(!projectsContext.selectedProjectState) return null;

    const [actualProject] = projectsContext.selectedProjectState;

    return (
        <div className="formular">
            <form>
                <div className="container-input">
                    <input type="text"
                    className="input-text"
                    placeholder="Task Name..."
                    name="name"
                    />
                </div>

                <div className="container-input">
                    <input type="submit"
                    className="btn btn-primary btn-submit btn-block"
                    value="Add Task"
                    />
                </div>
            </form>
        </div>
    )
}

export default FormTaskComponent;
