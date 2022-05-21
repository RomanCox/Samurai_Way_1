import {combineReducers, createStore} from "redux";
import profileReducer, {addPostAC, updateNewPostTextAC} from "./profileReducer";
import dialogsReducer, {addMessageAC, updateNewMessageTextAC} from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer, {followAC, setUsersAC, unfollowAC} from "./usersReducer";

export type ActionType = ReturnType<typeof addPostAC> |
    ReturnType<typeof updateNewPostTextAC> |
    ReturnType<typeof addMessageAC> |
    ReturnType<typeof updateNewMessageTextAC> |
    ReturnType<typeof followAC> |
    ReturnType<typeof unfollowAC> |
    ReturnType<typeof setUsersAC>


export const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    userPage: usersReducer,
});

let store = createStore(rootReducer);

export type AppStateType = ReturnType<typeof rootReducer>

export default store;