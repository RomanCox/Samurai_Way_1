import {ActionType} from "./reduxStore";
import {ProfileType} from "./profileReducer";

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

export const follow = (userID: number) => ({type: 'FOLLOW', userID} as const);
export const unfollow = (userID: number) => ({type: 'UNFOLLOW', userID} as const);
export const setUsers = (users: Array<UserType>) => ({type: 'SET-USERS', users} as const);
export const setCurrentPage = (currentPage: number) => ({type: 'SET-CURRENT-PAGE', currentPage} as const);
export const setTotalUsersCount = (totalUsersCount: number) => ({type: 'SET-TOTAL-COUNT', count: totalUsersCount} as const);
export const toggleIsFetching = (isFetching: boolean) => ({type: 'TOGGLE-ISFETCHING', isFetching} as const);

let initialState = {
    users: [] as Array<UserType>,
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
};

const usersReducer = (state: UsersPageType = initialState, action: ActionType): UsersPageType => {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state, users: state.users.map((user: UserType) => {
                    if (user.id === action.userID) {
                        return {...user, followed: true};
                    }
                    return user
                })
            };
        case "UNFOLLOW":
            return {
                ...state, users: state.users.map((user: UserType) => {
                    if (user.id === action.userID) {
                        return {...user, followed: false};
                    }
                    return user
                })
            };
        case "SET-USERS":
            return {...state, users: [...action.users]};
        case "SET-CURRENT-PAGE":
            return {...state, currentPage: action.currentPage};
        case "SET-TOTAL-COUNT":
            return {...state, totalUsersCount: action.count};
        case "TOGGLE-ISFETCHING":
            return {...state, isFetching: action.isFetching};
        default:
            return state;
    }
};

export default usersReducer;