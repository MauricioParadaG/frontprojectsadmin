import React, { useReducer } from 'react';
import {v4 as uuid} from "uuid";

import TaskContext from './taskContext';
import TaskReducer from './taskReducer';
import {FORM_PROJECT, GET_PROJECTS, ADDNEWPROJECT_TOLIST, FORM_VALIDATION, SELECTED_PROJECT, DELETE_PROJECT} from '../../types/index';

// Simulando datos que llegan de afuera, no más


//////////////////////////////////

const TaskState = props => {

    const newProjects = [
        {id: 1, name: 'Project A'},
        {id: 2, name: 'Project B'},
        {id: 3, name: 'Project C'},
        {id: 4, name: 'MERN'},
    ];

    const initialState = {
        tasks : [],
        //form : false,
        formError: false,
        //selectedProject: null
    }

    // Dispatch
    const [state, dispatch] = useReducer(TaskReducer, initialState);

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

    // Changing the selected proyect information
    const setselectedProjectState = newProjectID =>{
        dispatch({
            type: SELECTED_PROJECT,
            payload: newProjectID
        })
    }

    const setDeleteProjectState = newProjectID =>{
        dispatch({
            type: DELETE_PROJECT,
            payload: newProjectID
        })
    }


    return (
        <TaskContext.Provider
        value={{
            newProjectsState: state.newProjects,
            newProjectFormState: state.form,
            formErrorState: state.formError,
            selectedProjectState: state.selectedProject,
            setShowFormState,
            setNewProjectsState,
            setAddToListState,
            setShowErrorFormState,
            setselectedProjectState,
            setDeleteProjectState
          }}
        >
            {props.children}
        </TaskContext.Provider>
    )

};

export default TaskState;
