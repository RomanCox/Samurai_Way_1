import React from 'react'
import Profile from "./Profile";
import {connect} from "react-redux";
import {ActionType, AppStateType} from "../../Redux/reduxStore";
import {getProfile, ProfileType} from "../../Redux/profileReducer";
import {withRouter} from "react-router-dom";
import withAuthRedirect from "../../hoc/withAuthRedirect";

type MapStateToPropsType = {
    profile: ProfileType,
    isAuth: boolean,
}

type ProfileContainerProps = MapStateToPropsType & {
    setUserProfile: (profile: ProfileType) => ActionType
}

class ProfileContainer extends React.Component<any, AppStateType> {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        this.props.getProfile(userId);
    }

    render = () => {
        return <Profile profile={this.props.profile} isAuth={this.props.isAuth}/>
    }
}

let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

let MapStateToProps = (state: AppStateType) => ({
    profile: state.profilePage.profile,
});

let withUrlContainerComponent = withRouter(AuthRedirectComponent)

export default connect(MapStateToProps, {getProfile})(withUrlContainerComponent);