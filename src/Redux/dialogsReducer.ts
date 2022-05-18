import {v4 as uuidv4} from "uuid";
import {ActionType, DialogPageType} from "./store";

const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

export const addMessageAC = () => ({type: 'ADD-MESSAGE'} as const);
export const updateNewMessageTextAC = (newText: string) => ({type: 'UPDATE-NEW-MESSAGE-TEXT', newText: newText} as const);

let initialState = {
    dialogs: [
        {id: uuidv4(), name: 'Dimych'},
        {id: uuidv4(), name: 'Andrey'},
        {id: uuidv4(), name: 'Sveta'},
        {id: uuidv4(), name: 'Sasha'},
        {id: uuidv4(), name: 'Viktor'},
        {id: uuidv4(), name: 'Valera'}
    ],
    messages: [
        {id: uuidv4(), message: 'Hi'},
        {id: uuidv4(), message: 'How is you project'},
        {id: uuidv4(), message: 'Yo'},
        {id: uuidv4(), message: 'Yo'},
        {id: uuidv4(), message: 'Yo'}
    ],
    newMessageText: '',
}

const dialogsReducer = (state: DialogPageType = initialState, action: ActionType) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: uuidv4(),
                message: state.newMessageText,
            };
            state.messages.push(newMessage);
            state.newMessageText = '';
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText;
            return state;
        default:
            return state;
    }
}

export default dialogsReducer;