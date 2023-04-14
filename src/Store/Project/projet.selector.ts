import { rootState } from "../store"
import { Project } from "./project.type"

export const selectProjectArray = (state: rootState): Project[] => {
    return state.project
}

export const selectProjectSelected = (state: rootState): Project | undefined => {
    const selectedProject = state.project.find(project => project.isSelected)
    return selectedProject
}

export const selectProjectName = (state: rootState): string[] => {
    const names = state.project.map(project => project.name)

    return names
}