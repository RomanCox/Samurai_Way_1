import {ActionType} from "./reduxStore";

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

export default authReducer;