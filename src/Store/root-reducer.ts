import { combineReducers } from "redux";
import { projectReducer } from "./Project/project.reducer";

export const rootReducer = combineReducers({
    project: projectReducer
})