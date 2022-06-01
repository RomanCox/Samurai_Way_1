import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUserData} from "../../Redux/authReducer";
import {AppStateType} from "../../Redux/reduxStore";

export type MapStateToPropsType = {
    isAuth: boolean,
    login: string,
    photo: string,
}

type HeaderContainerProps = MapStateToPropsType & {
    getAuthUserData: () => void,
    photo: string
}

class HeaderContainer extends React.Component<HeaderContainerProps, AppStateType> {

    componentDidMount() {
        this.props.getAuthUserData()
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

export default connect(MapStateToProps, {getAuthUserData})(HeaderContainer);