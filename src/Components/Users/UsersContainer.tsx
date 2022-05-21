import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {AppStateType} from "../../Redux/reduxStore";
import {Dispatch} from "redux";
import {followAC, setUsersAC, unfollowAC, UserType} from "../../Redux/usersReducer";

type mapStateToPropsType = {
    users: Array<UserType>,
};

type mapDispatchToPropsType = {
    follow: (userID: string) => void,
    unfollow: (userID: string) => void,
    setUsers: (users: Array<UserType>) => void,
};

export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType;

let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        users: state.userPage.users,
    }
};

let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        follow: (userID: string) => {
            dispatch(followAC(userID));
        },
        unfollow: (userID: string) => {
            dispatch(unfollowAC(userID));
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersAC(users));
        },
    }
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;