import React, { useReducer } from 'react';
//import {v4 as uuid} from "uuid";

import taskContext from './taskContext';
import TaskReducer from './taskReducer';
import {GET_TASKSBYID} from '../../types/index';

// Simulando datos que llegan de afuera, no más


//////////////////////////////////

const TaskState = props => {

    const newTasks = [
        
    ];

    const initialState = {
        newTasks : [
        {name: 'Task 1', completed: true, projectId: 1},
        {name: 'Task 2', completed: false, projectId: 2},
        {name: 'Task 3', completed: true, projectId: 3},
        {name: 'Task 4', completed: false, projectId: 4},
        {name: 'Task 5', completed: true, projectId: 1},
        {name: 'Task 6', completed: false, projectId: 2}
    ],
        //form : false,
        //formError: false,
        taskProjectData: null
    }

    // Dispatch
    const [state, dispatch] = useReducer(TaskReducer, initialState);

    // Get tasks by projectId from outside
    const setNewTasksState = projectId =>{
        dispatch({
            type: GET_TASKSBYID,
            payload: projectId
        })
    };

    // CRUD Project

/*
    // Put newTasks into the list
    const setAddToListState = newProject =>{
        newProject.id = uuid();
        // Insert to newTasks State
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
*/


    return (
        <taskContext.Provider
        value={{
            newTasksState: state.newTasks,
            taskProjectDataState: state.taskProjectData,
            setNewTasksState
         /*
            newProjectFormState: state.form,
            formErrorState: state.formError,
            selectedProjectState: state.selectedProject,
            setShowFormState,
            setNewProjectsState,
            setAddToListState,
            setShowErrorFormState,
            setselectedProjectState,
            setDeleteProjectState
        */
          }}
        >
            {props.children}
        </taskContext.Provider>
    )

};

export default TaskState;
