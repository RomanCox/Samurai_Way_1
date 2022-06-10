import {ActionType} from './reduxStore';
import {usersAPI} from '../api/api';
import {Dispatch} from 'redux';

export type UsersPageType = typeof initialState;
type LocationType = {
    city: string,
    country: string,
}
type PhotosType = {
    small: string,
    large: string
}
export type UserType = {
    /*id: string,
    photoURL: string,
    followed: boolean,
    fullName: string,
    status: string,
    location: LocationType,*/
    name: string,
    id: number,
    photos: PhotosType,
    status: string,
    followed: boolean,
}

export const followSuccess = (userID: number) => ({type: 'FOLLOW', userID} as const);
export const unfollowSuccess = (userID: number) => ({type: 'UNFOLLOW', userID} as const);
export const setUsers = (users: Array<UserType>) => ({type: 'SET-USERS', users} as const);
export const setCurrentPage = (currentPage: number) => ({type: 'SET-CURRENT-PAGE', currentPage} as const);
export const setTotalUsersCount = (totalUsersCount: number) => ({
    type: 'SET-TOTAL-COUNT',
    count: totalUsersCount
} as const);
export const toggleIsFetching = (isFetching: boolean) => ({type: 'TOGGLE-IS-FETCHING', isFetching} as const);
export const toggleFollowingInProgress = (isFetching: boolean, userId: number) => ({
    type: 'TOGGLE-IS-FOLLOWING-IN-PROGRESS',
    isFetching,
    userId
} as const);

let initialState = {
    users: [] as UserType[],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [] as number[],
};

const usersReducer = (state: UsersPageType = initialState, action: ActionType): UsersPageType => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state, users: state.users.map((user: UserType) => {
                    if (user.id === action.userID) {
                        return {...user, followed: true};
                    }
                    return user
                })
            };
        case 'UNFOLLOW':
            return {
                ...state, users: state.users.map((user: UserType) => {
                    if (user.id === action.userID) {
                        return {...user, followed: false};
                    }
                    return user
                })
            };
        case 'SET-USERS':
            return {...state, users: [...action.users]};
        case 'SET-CURRENT-PAGE':
            return {...state, currentPage: action.currentPage};
        case 'SET-TOTAL-COUNT':
            return {...state, totalUsersCount: action.count};
        case 'TOGGLE-IS-FETCHING':
            return {...state, isFetching: action.isFetching};
        case 'TOGGLE-IS-FOLLOWING-IN-PROGRESS':
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            };
        default:
            return state;
    }
};

export const getUsers = (currentPage: number, pageSize: number) => {
    return (dispatch: Dispatch<ActionType>) => {
        dispatch(toggleIsFetching(true));
        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setCurrentPage(currentPage))
            dispatch(setTotalUsersCount(data.totalCount));
        });
    }
};

export const follow = (userId: number) => {
    return (dispatch: Dispatch<ActionType>) => {
        dispatch(toggleFollowingInProgress(true, userId));
        usersAPI.followUser(userId).then(data => {
            if (data.resultCode === 0) {
                dispatch(followSuccess(userId));
            }
            dispatch(toggleFollowingInProgress(false, userId));
        });
    }
};

export const unfollow = (userId: number) => {
    return (dispatch: Dispatch<ActionType>) => {
        dispatch(toggleFollowingInProgress(true, userId));
        usersAPI.unFollowUser(userId).then(data => {
            if (data.resultCode === 0) {
                dispatch(unfollowSuccess(userId));
            }
            dispatch(toggleFollowingInProgress(false, userId));
        });
    }
};

export default usersReducer;