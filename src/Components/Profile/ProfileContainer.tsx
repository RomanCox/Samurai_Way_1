import React from 'react'
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {ActionType, AppStateType} from "../../Redux/reduxStore";
import {ProfileType, setUserProfile} from "../../Redux/profileReducer";
import {withRouter} from "react-router-dom";

type MapStateToPropsType = {
    profile: ProfileType,
}

type ProfileContainerProps = MapStateToPropsType & {
    setUserProfile: (profile: ProfileType) => ActionType
}

class ProfileContainer extends React.Component</*ProfileContainerProps*/ any, AppStateType> {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(response => {
            this.props.setUserProfile(response.data);
        });
    }

    render = () => {
        return <Profile {...this.props} profile={this.props.profile}/>
    }
}

let MapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile,
});

let withUrlContainerComponent = withRouter(ProfileContainer)

export default connect(MapStateToProps, {setUserProfile})(withUrlContainerComponent);