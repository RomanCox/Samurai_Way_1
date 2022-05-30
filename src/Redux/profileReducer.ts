import {v4 as uuidv4} from "uuid";
import {ActionType} from "./reduxStore";

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
type PhotosType = {
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
export const addPost = () => ({type: 'ADD-POST'} as const);
export const updateNewPostText = (newText: string) => ({type: 'UPDATE-NEW-POST-TEXT', newText: newText} as const);
export const setUserProfile = (profile: ProfileType) => ({type: 'SET-USER-PROFILE', profile} as const);

let initialState = {
    posts: [
        {id: uuidv4(), message: 'Hi, how are you?', likesCount: 12},
        {id: uuidv4(), message: 'It\'s my first post', likesCount: 11},
        {id: uuidv4(), message: 'BlaBla', likesCount: 11},
        {id: uuidv4(), message: 'DaDa', likesCount: 11}
    ] as Array<PostType>,
    newPostText: '',
    profile: null as ProfileType,
};

const profileReducer = (state: ProfilePageType = initialState, action: ActionType): ProfilePageType => {

    switch (action.type) {
        case 'ADD-POST':
            let newPost = {
                id: uuidv4(),
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                newPostText: '',
                posts: [newPost, ...state.posts]
            };
        case 'UPDATE-NEW-POST-TEXT':
            return {
                ...state,
                newPostText: action.newText
            };
        case 'SET-USER-PROFILE':
            return {
                ...state,
                profile: action.profile
            };
        default:
            return state;
    }
};

export default profileReducer;