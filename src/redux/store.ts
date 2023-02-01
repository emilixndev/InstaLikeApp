import {applyMiddleware, combineReducers, createStore, Middleware} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import instalikeApi from "../instalikeApi";

const rootReducer = combineReducers({
    // post: x,
    // user: y,
})

const middleware:Middleware[]=[]

middleware.push(thunk.withExtraArgument(instalikeApi))

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)))


export type RootState = ReturnType<typeof rootReducer>

export default store
