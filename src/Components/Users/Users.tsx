import React from 'react';
import s from './Users.module.css'
import userPhoto from '../../assets/images/user.png'
import {NavLink} from 'react-router-dom';
import {UserType} from "../../Redux/usersReducer";
import {ActionType} from "../../Redux/reduxStore";

type UsersPropsType = {
    users: Array<UserType>,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    onPageChanged: (pageNumber: number) => void,
    follow: (userID: number) => ActionType,
    unfollow: (userID: number) => ActionType,
}

const Users = (props: UsersPropsType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p ? s.selectedPage : ''}
                             onClick={(e) => {
                                 props.onPageChanged(p)
                             }}>{p}</span>
            })}
        </div>
        {
            props.users.map(user => <div key={user.id}>
            <span>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small != null ? user.photos.small : userPhoto} className={s.userPhoto} alt='avatar'/>
                    </NavLink>
                    </div>
                <div>
                    {user.followed
                        ? <button onClick={() => {
                            props.unfollow(user.id)
                        }}>Unfollow</button>
                        : <button onClick={() => {
                            props.follow(user.id)
                        }}>Follow</button>}
                </div>
            </span>
                <span>
                <span>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </span>
                <span>
                    <div>{'user.location.country'}</div>
                    <div>{'user.location.city'}</div>
                </span>
            </span>
            </div>)
        }
    </div>
};

export default Users;