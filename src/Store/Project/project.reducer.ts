import { AnyAction } from "redux";
import { Project } from "./project.type";
import projetI from '../../projet_list.json'
import { changeSelectedProject, resetSelectedProject } from "./project.action";


export const projectReducer = (state: Project[] = projetI, action: AnyAction) => {
    
    if(changeSelectedProject.match(action)){
        return action.payload
    }

    if(resetSelectedProject.match(action)){
        return action.payload
    }

    return state
}