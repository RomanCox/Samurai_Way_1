import {applyMiddleware, combineReducers, createStore} from 'redux';
import profileReducer, {addPost, setUserProfile, updateNewPostText} from './profileReducer';
import dialogsReducer, {addMessage, updateNewMessageText} from './dialogsReducer';
import sidebarReducer from './sidebarReducer';
import usersReducer, {
    followSuccess,
    setCurrentPage,
    setTotalUsersCount,
    setUsers, toggleFollowingInProgress, toggleIsFetching,
    unfollowSuccess,
} from './usersReducer';
import authReducer, {setAuthPhoto, setAuthUserData} from './authReducer';
import thunkMiddleware from 'redux-thunk';

export type ActionType = ReturnType<typeof addPost> |
    ReturnType<typeof updateNewPostText> |
    ReturnType<typeof addMessage> |
    ReturnType<typeof updateNewMessageText> |
    ReturnType<typeof followSuccess> |
    ReturnType<typeof unfollowSuccess> |
    ReturnType<typeof setUsers> |
    ReturnType<typeof setCurrentPage> |
    ReturnType<typeof setTotalUsersCount> |
    ReturnType<typeof toggleIsFetching> |
    ReturnType<typeof toggleFollowingInProgress> |
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

let store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export type AppStateType = ReturnType<typeof rootReducer>

export default store;