import { ActionWithPayload, createAction, withMatcher } from "../../Utils/utils";
import { Project, PROJECT_ACTION_TYPE } from "./project.type";

export type ChangeSelectedProject = ActionWithPayload<PROJECT_ACTION_TYPE.CHANGE_SELECTED_PROJECT, Project[]>

export type ResetSelectedProject = ActionWithPayload<PROJECT_ACTION_TYPE.RESET_SELECTED_PROJECT, Project[]>

export const changeSelectedProject = withMatcher((projectToSelect: string, state: Project[] = []): ChangeSelectedProject => {
    const newState = state.map(project => {
        return project.name === projectToSelect ? {...project, isSelected: true} : {...project, isSelected: false}
    })
    return createAction(PROJECT_ACTION_TYPE.CHANGE_SELECTED_PROJECT, newState)
})

export const resetSelectedProject = withMatcher((state: Project[] = []): ResetSelectedProject => {
     const newState = state.map(project => {
        return {...project, isSelected: false}
     })
     return createAction(PROJECT_ACTION_TYPE.RESET_SELECTED_PROJECT, newState)
})