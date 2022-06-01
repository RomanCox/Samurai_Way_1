import {ActionType} from "./reduxStore";
import {authAPI, profileAPI} from "../api/api";

export type AuthUserType = typeof initialState;

export const setAuthUserData = (userId: number, email: string, login: string) => ({type: 'SET-AUTH-USER-DATA', data: {userId, email, login}} as const);
export const setAuthPhoto = (photo: string) => ({type: 'SET-AUTH-PHOTO', photo} as const);

let initialState = {
    id: 0,
    email: '',
    login: '',
    isFetching: false,
    isAuth: false,
    photo: '',
};

const authReducer = (state: AuthUserType = initialState, action: ActionType): AuthUserType => {
    switch (action.type) {
        case 'SET-AUTH-USER-DATA': {
            return {...state, ...action.data, isAuth: true}
        }
        case 'SET-AUTH-PHOTO': {
            return {...state, photo: action.photo}
        }
        default:
            return state;
    }
};

export const getAuthUserData = () => {
    return (dispatch: any) => {
        authAPI.me().then(data => {
            if (data.resultCode === 0) {
                dispatch(setAuthUserData(data.data.id, data.data.email, data.data.login));
                profileAPI.getProfilePhoto(data.data.id).then(data => {
                    dispatch(setAuthPhoto(data.photos.small));
                });
            }
        });
    }
}

export default authReducer;