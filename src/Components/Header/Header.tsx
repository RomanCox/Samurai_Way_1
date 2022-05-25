import React from 'react';
import s from './Header.module.css';
import logo from '../../assets/images/logo.jpg'

const Header = () => {
    return (
        <header className={s.header}>
            <img src={logo} alt=''/>
        </header>
    )
}

export default Header;