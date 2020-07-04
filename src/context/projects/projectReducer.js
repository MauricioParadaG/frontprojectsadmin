import {FORM_PROJECT, GET_PROJECTS, ADDNEWPROJECT_TOLIST} from '../../types/index';

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
                form: false
            }
        

        default: 
        return state;
    }
}
