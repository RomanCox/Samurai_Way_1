import {ActionType} from './reduxStore';
import {authAPI, profileAPI} from '../api/api';
import {Dispatch} from 'redux';
import {stopSubmit} from "redux-form";

export type LoginDataType = {
    email: string,
    password: string,
    rememberMe: boolean,
}

export type AuthUserType = typeof initialState;

export const setAuthUserData = (userId: number, email: string, login: string, isAuth: boolean) => ({type: 'SET-AUTH-USER-DATA', payload: {userId, email, login, isAuth}} as const);
export const setAuthPhoto = (photo: string) => ({type: 'SET-AUTH-PHOTO', photo} as const);

let initialState = {
    id: 0,
    email: '',
    login: '',
    /*isFetching: false,*/
    isAuth: false,
    photo: '',
};

const authReducer = (state: AuthUserType = initialState, action: ActionType): AuthUserType => {
    switch (action.type) {
        case 'SET-AUTH-USER-DATA': {
            return {...state, ...action.payload}
        }
        case 'SET-AUTH-PHOTO': {
            return {...state, photo: action.photo}
        }
        default:
            return state;
    }
};

export const getAuthUserData = () => {
    return (dispatch: Dispatch<ActionType>) => {
        authAPI.me().then(data => {
            if (data.resultCode === 0) {
                dispatch(setAuthUserData(data.data.id, data.data.email, data.data.login, true));
                profileAPI.getProfilePhoto(data.data.id).then(data => {
                    dispatch(setAuthPhoto(data.photos.small));
                });
            }
        });
    }
}

export const login = (email: string, password: string, rememberMe: boolean) => {
    return (dispatch: any) => {
        authAPI.login(email, password, rememberMe).then(data => {
            if (data.resultCode === 0) {
                dispatch(getAuthUserData());
            } else {
                let message = data.message.length > 0 ? data.message[0] : 'Some Error';
                dispatch(stopSubmit('login', { _error: 'Error' }));
            }
        });
    }
}

export const logout = () => {
    return (dispatch: any) => {
        authAPI.logout().then(data => {
            if (data.resultCode === 0) {
                dispatch(setAuthUserData(0, '', '', false));
            }
        });
    }
}

export default authReducer;