import {v4 as uuidv4} from "uuid";
import {ActionType, ProfilePageType} from "./store";

export const addPostAC = () => ({type: 'ADD-POST'} as const);
export const updateNewPostTextAC = (newText: string) => ({type: 'UPDATE-NEW-POST-TEXT', newText: newText} as const);

let initialState = {
    posts: [
        {id: uuidv4(), message: 'Hi, how are you?', likesCount: 12},
        {id: uuidv4(), message: 'It\'s my first post', likesCount: 11},
        {id: uuidv4(), message: 'BlaBla', likesCount: 11},
        {id: uuidv4(), message: 'DaDa', likesCount: 11}
    ],
    newPostText: '',
}

const profileReducer = (state: ProfilePageType = initialState, action: ActionType) => {
    switch (action.type) {
        case 'ADD-POST':
            let newPost = {
                id: uuidv4(),
                message: state.newPostText,
                likesCount: 0
            };
            state.posts.unshift(newPost);
            state.newPostText = '';
            return state;
        case 'UPDATE-NEW-POST-TEXT':
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}

export default profileReducer;