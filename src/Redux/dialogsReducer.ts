import {v4 as uuidv4} from "uuid";
import {ActionType} from "./reduxStore";

export type MessageType = {
    id: string,
    message: string,
};
export type DialogType = {
    id: string,
    name: string,
};
export type DialogPageType = typeof initialState;
export const addMessage = () => ({type: 'ADD-MESSAGE'} as const);
export const updateNewMessageText = (newText: string) => ({type: 'UPDATE-NEW-MESSAGE-TEXT', newText: newText} as const);

let initialState = {
    dialogs: [
        {id: uuidv4(), name: 'Dimych'},
        {id: uuidv4(), name: 'Andrey'},
        {id: uuidv4(), name: 'Sveta'},
        {id: uuidv4(), name: 'Sasha'},
        {id: uuidv4(), name: 'Viktor'},
        {id: uuidv4(), name: 'Valera'}
    ] as Array<DialogType>,
    messages: [
        {id: uuidv4(), message: 'Hi'},
        {id: uuidv4(), message: 'How is you project'},
        {id: uuidv4(), message: 'Yo'},
        {id: uuidv4(), message: 'Yo'},
        {id: uuidv4(), message: 'Yo'}
    ] as Array<MessageType>,
    newMessageText: '',
};

const dialogsReducer = (state: DialogPageType = initialState, action: ActionType): DialogPageType => {
    switch (action.type) {
        case 'ADD-MESSAGE': {
            let newMessage = {
                id: uuidv4(),
                message: state.newMessageText,
            };
            return {
                ...state,
                newMessageText: '',
                messages: [...state.messages, newMessage]
            };
        }
        case 'UPDATE-NEW-MESSAGE-TEXT': {
            return {
                ...state,
                newMessageText: action.newText,
            };
        }
        default:
            return state;
    }
};

export default dialogsReducer;