import { legacy_createStore as createStore  } from "redux";
import { rootReducer } from "./root-reducer";


export type rootState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)