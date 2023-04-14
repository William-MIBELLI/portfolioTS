export enum PROJECT_ACTION_TYPE {
    CHANGE_SELECTED_PROJECT = 'CHANGE_SELECTED_PROJECT',
    RESET_SELECTED_PROJECT = 'RESET_SELECTED_PROJECT'
}

export type Project = {
    name: string,
    description: string,
    urlSite: string,
    urlGit: string,
    technos: string[],
    isSelected: boolean
}