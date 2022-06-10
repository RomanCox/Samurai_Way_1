import React, {useState} from 'react';
import style from './Users.module.css'
import userPhoto from '../../assets/images/user.png'
import {NavLink} from 'react-router-dom';
import {UserType} from "../../Redux/usersReducer";
import MyButton from "../common/button/MyButton";

type UsersPropsType = {
    users: Array<UserType>,
    pageSize: number,
    totalItemsCount: number,
    currentPage: number,
    onPageChanged: (pageNumber: number) => void,
    followingInProgress: number[],
    follow: (userId: number) => void,
    unfollow: (userId: number) => void,
}

const Users = (props: UsersPropsType) => {

    const [leftDisabled, setLeftDisabled] = useState<boolean>(true);
    const [rightDisabled, setRightDisabled] = useState<boolean>(false);

    const leftArrowClickHandler = () => {
        if (props.currentPage <= 1) {
            setLeftDisabled(true)
        } else {
            setLeftDisabled(false)
            setRightDisabled(false)
            props.onPageChanged(props.currentPage - 1)
        }
    };

    const rightArrowClickHandler = () => {
        if (props.currentPage >= props.totalItemsCount) {
            setRightDisabled(true)
        } else {
            setRightDisabled(false)
            setLeftDisabled(false)
            props.onPageChanged(props.currentPage + 1)
        }
    }

    let pagesCount = Math.ceil(props.totalItemsCount / props.pageSize);
    let pages: Array<number[]> = [];
    let portion: number[] = [];

    for (let i = 1; i <= pagesCount; i++) {
        portion.push(i);
        portion.push(i + 1);
        portion.push(i + 2);
        portion.push(i + 3);
        portion.push(i + 4);
        pages.push(portion);
        portion = [];
    };

    let renderPages: {} | null | undefined = [];

    let pagination: Array<number[]> =
        props.currentPage > 3
            ? pages.filter(array => array[2] === props.currentPage)
            : pages;

    if (pagination[0]) {
        renderPages = pagination[0].map(pageNumber => {
            return (
                <div className={`${style.page} ${props.currentPage === pageNumber ? style.selectedPage : ''}`}
                     onClick={() => {
                         props.onPageChanged(pageNumber)
                     }}>
                    <svg width="50px" height="80px" viewBox="0 0 50 50" className={style.svg}>
                        <circle className={style.circle} cx="26" cy="13" r="20"/>
                    </svg>
                    {pageNumber}
                </div>
            )
        })
    };

    const leftArrowStyle = `${style.page} ${style.arrow} ${props.currentPage <= 1 ? style.disabledArrow : ''}`;
    const leftArrowCircleStyle = `${style.circle} ${props.currentPage <= 1 ? style.circleError : ''}`;
    const rightArrowStyle = `${style.page} ${style.arrow} ${props.currentPage >= props.totalItemsCount ? style.disabledArrow : ''}`;
    const rightArrowCircleStyle = `${style.circle} ${props.currentPage >= props.totalItemsCount ? style.circleError : ''}`;

    return (
        <div className={style.container}>
            <div className={style.paginationContainer}>
                <span className={leftArrowStyle} onClick={leftArrowClickHandler}>
                    <svg width="50px" height="80px" viewBox="0 0 50 50" className={style.svg}>
                        <circle className={leftArrowCircleStyle} cx="26" cy="17" r="20"/>
                    </svg>
                    &laquo;
                </span>
                {renderPages}
                <span className={rightArrowStyle} onClick={rightArrowClickHandler}>
                    <svg width="50px" height="80px" viewBox="0 0 50 50" className={style.svg}>
                        <circle className={rightArrowCircleStyle} cx="26" cy="17" r="20"/>
                    </svg>
                    &raquo;</span>
            </div>
            <div className={style.usersContainer}>
                {props.users.map(user =>
                    <div key={user.id} className={style.userContainer}>
                        <div className={style.avatarContainer}>
                            <NavLink to={'/profile/' + user.id}>
                                <img src={user.photos.small != null ? user.photos.small : userPhoto}
                                     className={style.userPhoto}
                                     alt='avatar'/>
                            </NavLink>
                        </div>
                        <div className={style.buttonContainer}>
                            {user.followed
                                ? <MyButton disabled={props.followingInProgress.some(id => id === user.id)}
                                            onClick={() => {
                                                props.unfollow(user.id)
                                            }}>Unfollow</MyButton>
                                : <MyButton disabled={props.followingInProgress.some(id => id === user.id)}
                                            onClick={() => {
                                                props.follow(user.id)
                                            }}>Follow</MyButton>}
                        </div>
                        <div className={style.userInfoContainer}>
                            <span>{user.name}</span>
                            <span>{user.status}</span>
                        </div>
                        {/*<span>
                               <div>{'user.location.country'}</div>
                               <div>{'user.location.city'}</div>
                         </span>*/}
                    </div>)
                }
            </div>
        </div>
    )
};

export default Users;