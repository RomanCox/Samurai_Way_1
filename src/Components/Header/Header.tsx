import React from 'react';
import s from './Header.module.css';
import logo from '../../assets/images/logo.jpg'
import {NavLink} from 'react-router-dom';
import {MapStateToPropsType} from './HeaderContainer';

type HeaderPropsType = MapStateToPropsType & {
    photo: string,
}

const Header = (props: HeaderPropsType) => {
    return (
        <header className={s.header}>
            <img src={logo} alt=''/>
            <div className={s.loginBlock}>
                {props.isAuth ? props.login
                    : <NavLink to='/login'>
                        Login
                    </NavLink>}
            </div>
            <div className={s.avatar}>
                {!props.isAuth || !props.photo ? <img src={logo}/> :
                    <img src={props.photo}/>}
            </div>
        </header>
    )
}

export default Header;