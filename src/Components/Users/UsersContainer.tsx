import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {ActionType, AppStateType} from "../../Redux/reduxStore";
import {
    follow,
    setCurrentPage, toggleIsFetching,
    setTotalUsersCount,
    setUsers,
    unfollow, UsersPageType,
    UserType
} from "../../Redux/usersReducer";
import axios from "axios";
import Preloader from "../common/preloader/Preloader";

type mapStateToPropsType = UsersPageType;

type UsersContainerProps = UsersPageType & {
    setUsers: (users: Array<UserType>) => ActionType,
    setCurrentPage: (pageNumber: number) => ActionType,
    setTotalUsersCount: (totalCount: number) => ActionType,
    follow: (userID: number) => ActionType,
    unfollow: (userID: number) => ActionType,
    toggleIsFetching: (isFetching: boolean) => ActionType,
};

class UsersContainer extends React.Component<UsersContainerProps, AppStateType> {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {withCredentials: true}).then(response => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        });
    }

    onPageChanged = (pageNumber: number) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, {withCredentials: true,}).then(response => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.items);
        });
    }

    render = () => {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
                users={this.props.users}
                onPageChanged={this.onPageChanged}
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
            />
        </>
    }
}

let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    }
};

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching
})(UsersContainer);