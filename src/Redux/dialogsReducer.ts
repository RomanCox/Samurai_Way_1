import {v4 as uuidv4} from 'uuid';
import {ActionType} from './reduxStore';

export type MessageType = {
    id: string,
    message: string,
};
export type DialogType = {
    id: string,
    name: string,
};
export type DialogPageType = typeof initialState;
export const sendMessage = (newMessageBody: any) => ({type: 'SEND-MESSAGE', newMessageBody} as const);

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
};

const dialogsReducer = (state: DialogPageType = initialState, action: ActionType): DialogPageType => {
    switch (action.type) {
        case 'SEND-MESSAGE': {
            let newMessage = {
                id: uuidv4(),
                message: action.newMessageBody,
            };
            return {
                ...state,
                messages: [...state.messages, newMessage]
            };
        }
        default:
            return state;
    }
};

export default dialogsReducer;