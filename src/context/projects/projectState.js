import React, { useReducer } from 'react';

import projectContext from './projectContext';
import projectReducer from './projectReducer';
import {FORM_PROJECT} from '../../types/index';

const ProjectState = props => {

    const initialState = {
         newProjects : [
            {id: 1, name: 'Project A'},
            {id: 2, name: 'Project B'},
            {id: 3, name: 'Project C'},
            {id: 4, name: 'MERN'},
        ],
        form : false
    }

    // Dispatch
    const [state, dispatch] = useReducer(projectReducer, initialState);

    // CRUD Project

    const setShowFormState = () =>{
        dispatch({
            type: FORM_PROJECT
        })
    }

    return (
        <projectContext.Provider
        value={{
            newProjectsState: state.newProjects,
            newProjectFormState: state.form,
            setShowFormState
          }}
        >
            {props.children}
        </projectContext.Provider>
    )

};

export default ProjectState;
