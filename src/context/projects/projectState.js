import React, { useReducer } from 'react';
import {v4 as uuid} from "uuid";

import projectContext from './projectContext';
import projectReducer from './projectReducer';
import {FORM_PROJECT, GET_PROJECTS, ADDNEWPROJECT_TOLIST, FORM_VALIDATION} from '../../types/index';

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
        form : false,
        formError: false
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

    // Put newProjects into the list
    const setAddToListState = newProject =>{
        newProject.id = uuid();
        // Insert to newProjects State
        dispatch({
            type: ADDNEWPROJECT_TOLIST,
            payload: newProject
        })
    }

    // Errors while trying to add a newProject
    const setShowErrorFormState = () =>{
        dispatch({
            type: FORM_VALIDATION
        })
    }


    return (
        <projectContext.Provider
        value={{
            newProjectsState: state.newProjects,
            newProjectFormState: state.form,
            formErrorState: state.formError,
            setShowFormState,
            setNewProjectsState,
            setAddToListState,
            setShowErrorFormState
          }}
        >
            {props.children}
        </projectContext.Provider>
    )

};

export default ProjectState;
