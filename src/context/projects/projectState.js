import React, { useReducer } from 'react';

import projectContext from './projectContext';
import projectReducer from './projectReducer';

const ProjectState = props => {

    const initialState = {
        form : false
    }

    // Dispatch
    const [state, dispatch] = useReducer(projectReducer, initialState);

    // CRUD Project

    return (
        <projectContext.Provider
        value={{
            newProjectFormState: state.form
          }}
        >
            {props.children}
        </projectContext.Provider>
    )

};

export default ProjectState;
