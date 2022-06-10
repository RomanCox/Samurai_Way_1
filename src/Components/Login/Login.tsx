import React from 'react';
import style from './Login.module.css'
import {Field, reduxForm} from 'redux-form';
import MyButton from '../common/button/MyButton';
import MyInputText from '../common/input/MyInputText';
import {connect} from "react-redux";
import {login} from "../../Redux/authReducer";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../../Redux/reduxStore";

type mapStateToPropsType = {
    isAuth: boolean,
}

const LoginForm = (props: any) => {

    let loginHandler = () => {
        return (
            <MyInputText backgroundColor={style.backgroundInput} placeholder={'Email'}/>
        )
    }

    let passwordHandler = () => {
        return (
            <MyInputText backgroundColor={style.backgroundInput} placeholder={'Password'} type={'password'}/>
        )
    }

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Email'} name={'email'} component={'input'}/>
            </div>
            <div>
                <Field placeholder={'Password'} name={'password'} component={'input'} type={'password'}/>
            </div>
            <div>
                <Field component={'input'} name={'rememberMe'} type={'checkbox'}/> Remember me
            </div>
            <div>
                <MyButton>Login</MyButton>
            </div>
        </form>
    )
};

const LoginReduxForm = reduxForm({form: 'login',})(LoginForm)

const Login = (props: any) => {
    const onSubmitHandler = (formData: any) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmitHandler}/>
    </div>
};

const mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);