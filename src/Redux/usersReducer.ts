import {ActionType} from "./reduxStore";

export type UsersPageType = typeof initialState;
type LocationType = {
    city: string,
    country: string,
}
export type UserType = {
    id: string,
    photoURL: string,
    followed: boolean,
    fullName: string,
    status: string,
    location: LocationType,
}


export const followAC = (userID: string) => ({type: 'FOLLOW', userID} as const);
export const unfollowAC = (userID: string) => ({type: 'UNFOLLOW', userID} as const);
export const setUsersAC = (users: Array<UserType>) => ({type: 'SET-USERS', users} as const);

let initialState = {
    users: [] as Array<UserType>,
};

const usersReducer = (state: UsersPageType = initialState, action: ActionType): UsersPageType => {
    switch (action.type) {
        case "FOLLOW":
            return {...state, users: state.users.map((user: UserType) => {
                    if (user.id === action.userID) {
                        return {...user, followed: true};
                    }
                return user
            })};
        case "UNFOLLOW":
            return {...state, users: state.users.map((user: UserType) => {
                    if (user.id === action.userID) {
                        return {...user, followed: false};
                    }
                    return user
                })};
        case "SET-USERS":
            return {...state, users: [ ...state.users, ...action.users ]};
        default:
            return state;
    }
};

export default usersReducer;