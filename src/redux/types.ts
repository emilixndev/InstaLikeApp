import {Action, AnyAction} from "redux";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import type {RootState} from "./store";
import instalikeApi from "../instalikeApi";

export interface AppAction<T extends string, P = unknown> extends Action<T>{
    payload: P
}

export  type AppThunkAction<R = void> = ThunkAction<R, RootState, typeof instalikeApi,AnyAction>

export  type AppThunkDispatch = ThunkDispatch<RootState, typeof instalikeApi, AnyAction >
