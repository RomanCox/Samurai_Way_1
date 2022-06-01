import {Redirect} from "react-router-dom";
import {AppStateType} from "../Redux/reduxStore";
import {connect} from "react-redux";
import {ComponentType} from "react";

type mapStatePropsType = {
    isAuth: boolean
}

let mapStateToPropsForRedirect = (state: AppStateType): mapStatePropsType => {
    return {
        isAuth: state.auth.isAuth,
    }
};

export function withAuthRedirect<T>(Component: ComponentType<T>) {
    const RedirectComponent = (props: mapStatePropsType) => {
        let {isAuth, ...restProps} = props
        if (!isAuth) {
            return <Redirect to={'/login'}/>
        }
        return <Component {...restProps as T}/>
    }

    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)

    return ConnectedAuthRedirectComponent;
};

export default withAuthRedirect;