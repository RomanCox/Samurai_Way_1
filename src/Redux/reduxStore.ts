import {combineReducers, createStore} from "redux";
import profileReducer, {addPost, setUserProfile, updateNewPostText} from "./profileReducer";
import dialogsReducer, {addMessage, updateNewMessageText} from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer, {
    follow,
    setCurrentPage,
    toggleIsFetching,
    setTotalUsersCount,
    setUsers,
    unfollow
} from "./usersReducer";
import authReducer, {setAuthPhoto, setAuthUserData} from "./authReducer";

export type ActionType = ReturnType<typeof addPost> |
    ReturnType<typeof updateNewPostText> |
    ReturnType<typeof addMessage> |
    ReturnType<typeof updateNewMessageText> |
    ReturnType<typeof follow> |
    ReturnType<typeof unfollow> |
    ReturnType<typeof setUsers> |
    ReturnType<typeof setCurrentPage> |
    ReturnType<typeof setTotalUsersCount> |
    ReturnType<typeof toggleIsFetching> |
    ReturnType<typeof setUserProfile> |
    ReturnType<typeof setAuthUserData> |
    ReturnType<typeof setAuthPhoto>

export const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
});

let store = createStore(rootReducer);

export type AppStateType = ReturnType<typeof rootReducer>

export default store;