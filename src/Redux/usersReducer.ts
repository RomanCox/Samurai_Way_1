import {ActionType} from "./reduxStore";

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


export const followAC = (userID: number) => ({type: 'FOLLOW', userID} as const);
export const unfollowAC = (userID: number) => ({type: 'UNFOLLOW', userID} as const);
export const setUsersAC = (users: Array<UserType>) => ({type: 'SET-USERS', users} as const);
export const setCurrentPageAC = (currentPage: number) => ({type: 'SET-CURRENT-PAGE', currentPage} as const);
export const setTotalUsersCountAC = (totalUsersCount: number) => ({type: 'SET-TOTAL-COUNT', count: totalUsersCount} as const);

let initialState = {
    users: [] as Array<UserType>,
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
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
        default:
            return state;
    }
};

export default usersReducer;