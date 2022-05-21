import { v4 as uuidv4 } from 'uuid';
import profileReducer, {addPostAC, updateNewPostTextAC} from "./profileReducer";
import dialogsReducer, {addMessageAC, updateNewMessageTextAC} from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

type MessageType = {
    id: string,
    message: string,
}
type DialogType = {
    id: string,
    name: string,
}
type PostType = {
    id: string,
    message: string,
    likesCount: number,
}
type ProfilePageType = {
    posts: Array<PostType>,
    newPostText: string,
}
type DialogPageType = {
    dialogs: Array<DialogType>,
    messages: Array<MessageType>,
    newMessageText: string,
}
type SidebarType = {}
type RootStateType = {
    profilePage: ProfilePageType,
    dialogsPage: DialogPageType,
    sidebar: SidebarType,
}

type ActionType = ReturnType<typeof addPostAC> |
    ReturnType<typeof updateNewPostTextAC> |
    ReturnType<typeof addMessageAC> |
    ReturnType<typeof updateNewMessageTextAC>

type RootStoreType = {
    _state: RootStateType,
    _callSubscriber: (state: RootStateType) => void,
    getState: () => RootStateType,
    subscribe: (observer: () => void) => void,
    dispatch: (action: ActionType) => void,
}

let store: RootStoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: uuidv4(), message: 'Hi, how are you?', likesCount: 12},
                {id: uuidv4(), message: 'It\'s my first post', likesCount: 11},
                {id: uuidv4(), message: 'BlaBla', likesCount: 11},
                {id: uuidv4(), message: 'DaDa', likesCount: 11}
            ],
            newPostText: '',
        },
        dialogsPage: {
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
        },
        sidebar: {} // бар например с 3 друзьями под ссылками в navbar
    },
    _callSubscriber(_state) {
        console.log('State changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer: () => void) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    },
};

