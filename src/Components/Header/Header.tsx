import React from 'react';
import style from './Header.module.css';
import logo from '../../assets/images/Chasing Messenger-logo [red+white].png'
import avatar from '../../assets/images/user.png'
import {NavLink} from 'react-router-dom';
import {MapStateToPropsType} from './HeaderContainer';
import MyButton from '../common/button/MyButton';

type HeaderPropsType = MapStateToPropsType & {
    photo: string,
    logout: () => void,
};

const Header = (props: HeaderPropsType) => {
    return (
        <header className={style.headerContainer}>
            <div className={style.logoContainer}>
                <img src={logo} alt='' className={style.logo}/>
            </div>
            {props.isAuth
                ? <div className={style.profileContainer}>
                    <div className={style.avatar}>
                        {!props.photo ? <img src={avatar} width={'100px'}/> : <img src={props.photo}/>}
                    </div>
                    <div className={style.nameBlockContainer}>
                        <div className={style.nameBlock}>{props.login}</div>
                        <MyButton textColor={'red'} onClick={props.logout}>Log Out</MyButton>
                    </div>
                </div>
                : <div className={style.loginBlockContainer}>
                    <NavLink to='/login' className={style.loginBlock}><MyButton
                        textColor={'green'}>LOGIN</MyButton></NavLink>
                </div>
            }
        </header>
    )
};

export default Header;