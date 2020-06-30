import React, {useContext, useState} from 'react';

const NewProjectComponent = () => {

    const [newProject, setNewProjectState] = useState({
        name:''
    }
    );

    const onChangeProject = event => {
        setNewProjectState({
            ...newProject,
            // adding an ID - uuid library
            //id: uuid(),
            // adding the form info to the state
            [event.target.name]: event.target.value
        });
    }  

    const onSubmit = event => {
        event.preventDefault();
    }


    return (
        <>
            <button
            type="button"
            className="btn btn-block btn-primary"
            >
            New Project   
            </button>

            <form 
            className="form-new-project"
            onSubmit={onSubmit}
            >
                <input type="text"
                className="input-text"
                placeholder="Project Name"
                name="name"
                onChange={onChangeProject}
                value={newProject.name}
                />

                <input type="submit"
                className="btn btn-block btn-primary"
                value="Add Project"
                />

            </form>

        </>
    )
}

export default NewProjectComponent;
