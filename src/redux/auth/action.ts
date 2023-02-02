import {AppAction} from "../types";

export const LOGIN = "AUTH/LOGIN"
export const LOGOUT = "AUTH/LOGOUT"

export type LoginAction = AppAction<typeof LOGIN>;
export type LogoutAction = AppAction<typeof LOGOUT>;

export type AuthAction = LoginAction | LogoutAction

export const login = () : LoginAction => ({
    type: LOGIN,
    payload:null
})

export const logout = () : LogoutAction => ({
    type: LOGOUT,
    payload:null
})

