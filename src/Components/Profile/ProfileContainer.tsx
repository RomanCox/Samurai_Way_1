import React from 'react'
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/reduxStore";
import {getProfile, getStatus, ProfileType, updateStatus} from "../../Redux/profileReducer";
import {withRouter} from "react-router-dom";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";

type MapStateToPropsType = {
    profile: ProfileType,
    isAuth: boolean,
    status: string,
    updateStatus: (status: string) => void,
}

type ProfileContainerProps = MapStateToPropsType & {
    getStatus: (id: number) => void,
    getProfile: (id: number) => void,
}

class ProfileContainer extends React.Component<any, AppStateType> {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 21746;
        }
        this.props.getProfile(userId);
        this.props.getStatus(userId);
    }

    render = () => {
        return <Profile profile={this.props.profile} isAuth={this.props.isAuth} status={this.props.status} updateStatus={this.props.updateStatus}/>
    }
}

let MapStateToProps = (state: AppStateType) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
});

export default compose<React.ComponentType>(
    connect(MapStateToProps, {getProfile, getStatus, updateStatus}),
    withRouter,
    /*withAuthRedirect*/
)(ProfileContainer);