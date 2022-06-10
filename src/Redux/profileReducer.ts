import {v4 as uuidv4} from 'uuid';
import {ActionType} from './reduxStore';
import {profileAPI} from '../api/api';
import {Dispatch} from 'redux';

export type PostType = {
    id: string,
    message: string,
    likesCount: number,
}

export type ProfilePageType = typeof initialState;
type ContactsType = {
    facebook: string,
    github: string,
    instagram: string,
    mainLink: string | null,
    twitter: string,
    vk: string,
    website: string | null,
    youtube: string | null,
}
export type PhotosType = {
    small: string,
    large: string,
}
export type ProfileType = {
    aboutMe: string,
    contacts: ContactsType,
    fullName: string,
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    photos: PhotosType,
    userId: number,
} | null
export const addPost = (newPostBody: any) => ({type: 'ADD-POST', newPostBody} as const);
export const setUserProfile = (profile: ProfileType) => ({type: 'SET-USER-PROFILE', profile} as const);
export const setStatus = (status: string) => ({type: 'SET-STATUS', status} as const);

let initialState = {
    posts: [
        {id: uuidv4(), message: 'Hi, how are you?', likesCount: 12},
        {id: uuidv4(), message: 'It\'s my first post', likesCount: 11},
        {id: uuidv4(), message: 'BlaBla', likesCount: 11},
        {id: uuidv4(), message: 'DaDa', likesCount: 11}
    ] as Array<PostType>,
    profile: null as ProfileType,
    status: '',
};

const profileReducer = (state: ProfilePageType = initialState, action: ActionType): ProfilePageType => {

    switch (action.type) {
        case 'ADD-POST':
            let newPost = {
                id: uuidv4(),
                message: action.newPostBody,
                likesCount: 0
            };
            return {
                ...state,
                posts: [newPost, ...state.posts]
            };
        case 'SET-USER-PROFILE':
            return {
                ...state,
                profile: action.profile
            };
        case 'SET-STATUS':
            return {
                ...state,
                status: action.status
            };
        default:
            return state;
    }
};

export const getProfile = (userId: number) => {
    return (dispatch: Dispatch<ActionType>) => {
        profileAPI.getUserProfile(userId).then(data => {
            dispatch(setUserProfile(data));
        });
    }
};

export const getStatus = (userId: number) => {
    return (dispatch: Dispatch<ActionType>) => {
        profileAPI.getStatus(userId).then(data => {
            dispatch(setStatus(data));
        });
    }
};

export const updateStatus = (status: string) => {
    return (dispatch: Dispatch<ActionType>) => {
        profileAPI.updateStatus(status).then(data => {
            if (data.resultCode === 0) {
            dispatch(setStatus(status))
            }
        });
    }
};

export default profileReducer;