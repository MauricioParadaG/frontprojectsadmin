import React, { useReducer } from 'react';

import projectContext from './projectContext';
import projectReducer from './projectReducer';
import {FORM_PROJECT, GET_PROJECTS} from '../../types/index';

// Simulando datos que llegan de afuera, no más


//////////////////////////////////

const ProjectState = props => {

    const newProjects = [
        {id: 1, name: 'Project A'},
        {id: 2, name: 'Project B'},
        {id: 3, name: 'Project C'},
        {id: 4, name: 'MERN'},
    ];

    const initialState = {
        newProjects : [],
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

    // Get name projects from inside this state
    const setNewProjectsState = () =>{
        dispatch({
            type: GET_PROJECTS,
            payload: newProjects
        })
    }


    return (
        <projectContext.Provider
        value={{
            newProjectsState: state.newProjects,
            newProjectFormState: state.form,
            setShowFormState,
            setNewProjectsState
          }}
        >
            {props.children}
        </projectContext.Provider>
    )

};

export default ProjectState;
