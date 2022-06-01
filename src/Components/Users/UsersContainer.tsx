import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {ActionType, AppStateType} from "../../Redux/reduxStore";
import {
    setCurrentPage,
    UsersPageType,
    getUsers, follow, unfollow
} from "../../Redux/usersReducer";
import Preloader from "../common/preloader/Preloader";

type mapStateToPropsType = UsersPageType;

type UsersContainerProps = UsersPageType & {
    setCurrentPage: (pageNumber: number) => ActionType,
    followingInProgress: number[],
    getUsers: (currentPage: number, pageSize: number) => void,
    follow: (userId: number) => void,
    unfollow: (userId: number) => void,
};

class UsersContainer extends React.Component<UsersContainerProps, AppStateType> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    };

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    };

    render = () => {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
                users={this.props.users}
                onPageChanged={this.onPageChanged}
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                followingInProgress={this.props.followingInProgress}
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
        followingInProgress: state.usersPage.followingInProgress,
    }
};

export default connect(mapStateToProps, {setCurrentPage, getUsers, follow, unfollow})(UsersContainer);