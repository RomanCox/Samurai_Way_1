import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import axios from "axios";
import {setAuthPhoto, setAuthUserData} from "../../Redux/authReducer";
import {ActionType, AppStateType} from "../../Redux/reduxStore";

export type MapStateToPropsType = {
    isAuth: boolean,
    login: string,
    photo: string,
}

type HeaderContainerProps = MapStateToPropsType & {
    setAuthUserData: (userId: number, email: string, login: string) => ActionType,
    setAuthPhoto: (photo: string) => ActionType,
    photo: string
}

class HeaderContainer extends React.Component<HeaderContainerProps, AppStateType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true}).then(response => {
            if (response.data.resultCode === 0) {
                this.props.setAuthUserData(response.data.data.id, response.data.data.email, response.data.data.login);
                axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${response.data.data.id}`).then(response => {
                    this.props.setAuthPhoto(response.data.photos.small)
                });
            }
        });
    }

    render() {
        return <Header {...this.props} photo={this.props.photo}/>
    }
}

let MapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    photo: state.auth.photo
});

export default connect(MapStateToProps, {setAuthUserData, setAuthPhoto})(HeaderContainer);