import React from 'react';
import style from './Navbar.module.css';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className={style.nav}>
            <div className={style.itemContainer}>
                <div className={style.item}>
                    <NavLink to='/profile' activeClassName={style.active}>
                        <svg width="120px" height="40px" viewBox="0 0 120 40" className={style.svg}>
                            <polyline points="1,1 119,1 119,39 1,39 1,1"/>
                        </svg>
                        My Profile
                    </NavLink>

                </div>
            </div>
            <div className={style.itemContainer}>
                <div className={style.item}>
                    <NavLink to='/dialogs' activeClassName={style.active}>
                        <svg width="120px" height="40px" viewBox="0 0 120 40" className={style.svg}>
                            <polyline points="1,1 119,1 119,39 1,39 1,1"/>
                        </svg>
                        Messages</NavLink>
                </div>
            </div>
            <div className={style.itemContainer}>
                <div className={style.item}>
                    <NavLink to='/users' activeClassName={style.active}>
                        <svg width="120px" height="40px" viewBox="0 0 120 40" className={style.svg}>
                            <polyline points="1,1 119,1 119,39 1,39 1,1"/>
                        </svg>
                        Users</NavLink>
                </div>
            </div>
            <div className={style.itemContainer}>
                <div className={style.item}>
                    <NavLink to='/news' activeClassName={style.active}>
                        <svg width="120px" height="40px" viewBox="0 0 120 40" className={style.svg}>
                            <polyline points="1,1 119,1 119,39 1,39 1,1"/>
                        </svg>
                        News</NavLink>
                </div>
            </div>
            <div className={style.itemContainer}>
                <div className={style.item}>
                    <NavLink to='/music' activeClassName={style.active}>
                        <svg width="120px" height="40px" viewBox="0 0 120 40" className={style.svg}>
                            <polyline points="1,1 119,1 119,39 1,39 1,1"/>
                        </svg>
                        Music</NavLink>
                </div>
            </div>
            <div className={style.itemContainer}>
                <div className={style.item}>
                    <NavLink to='/settings' activeClassName={style.active}>
                        <svg width="120px" height="40px" viewBox="0 0 120 40" className={style.svg}>
                            <polyline points="1,1 119,1 119,39 1,39 1,1"/>
                        </svg>
                        Settings</NavLink>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;