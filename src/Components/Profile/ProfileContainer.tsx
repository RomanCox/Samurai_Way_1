import React from 'react'
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/reduxStore";
import {setUserProfile} from "../../Redux/profileReducer";

class ProfileContainer extends React.Component<any, any> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
            this.props.setUserProfile(response.data);
        });
    }

    render = () => {
        return <Profile profile={this.props.profile}/>
    }
}

let MapStateToProps = (state: AppStateType) => ({
    profile: state.profilePage.profile,
});

export default connect(MapStateToProps, {setUserProfile})(ProfileContainer);