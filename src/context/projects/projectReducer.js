import {FORM_PROJECT, GET_PROJECTS, ADDNEWPROJECT_TOLIST, FORM_VALIDATION, SELECTED_PROJECT} from '../../types/index';

export default (state, action) => {
    switch (action.type){
        case FORM_PROJECT:
            return {
                ...state,
                form: true
            }
            
        case GET_PROJECTS:
            return {
                ...state,
                newProjects: action.payload
            }

        case ADDNEWPROJECT_TOLIST:
            return {
                ...state,
                newProjects: [...state.newProjects, action.payload],
                form: false,
                formError: false
            }
            
        case FORM_VALIDATION:
            return {
                ...state,
                formError: true
            }

        case SELECTED_PROJECT:
            return {
                ...state,
                selectedProject: state.newProjects.filter(selectedProject => selectedProject.id === action.payload)
            }    

        default: 
        return state;
    }
}
