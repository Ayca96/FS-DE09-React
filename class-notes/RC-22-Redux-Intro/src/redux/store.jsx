
import {combineReducers, legacy_createStore as createStore} from "redux"
import todoReducer from "./reducers/todoReducer";
import counterReducer from "./reducers/counterReducer";

// yeni komut aslinda legacy_createStore

const topluReducer =combineReducers({
counterReducer:counterReducer,
todoReducer: todoReducer,
})




export const store = createStore(topluReducer);