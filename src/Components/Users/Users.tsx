import React from 'react';
import s from './Users.module.css';
import {UsersPropsType} from "./UsersContainer";
import {v4 as uuidv4} from "uuid";

const Users = (props: UsersPropsType) => {

    if (props.users.length === 0) {
        props.setUsers([
            {id: uuidv4(), photoURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaMRDmcUncTBqln9mY-_x68_DFK3BBeIVneA&usqp=CAU', followed: false, fullName: 'Dmitry', status: 'I`m a Boss', location: {city: 'Minsk', country: 'Belarus'} },
            {id: uuidv4(), photoURL: 'https://i.discogs.com/SFeMa1RYMDrAEKaRIsR12IpC9DLve3p6YyUVtp_J9MM/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTMzNDg1/NTItMTU4OTc1NDAx/NS05NTMwLmpwZWc.jpeg', followed: true, fullName: 'Sasha', status: 'It`s ok', location: {city: 'Moscow', country: 'Russia'} },
            {id: uuidv4(), photoURL: 'https://upload.wikimedia.org/wikipedia/commons/8/8d/Abramovich_Chukotka_%28cropped%29.jpg', followed: true, fullName: 'Roman', status: 'One? More!', location: {city: 'Kiev', country: 'Ukraine'} },
            {id: uuidv4(), photoURL: 'https://n1s2.starhit.ru/ab/e2/91/abe29181d2bb6cf01af346588bc87eda/480x497_0_b9244ebfccd61954d7a5c2c5a85304e2@480x497_0xac120003_11464737881600760060.jpg', followed: false, fullName: 'Elmin', status: 'Twenty five!', location: {city: 'Alma Aty', country: 'Kazakhstan'} },
        ])

    }

    return <div>
        {
            props.users.map(user => <div key={user.id}>
            <span>
                <div>
                    <img src={user.photoURL} className={s.userPhoto} alt={'аватарка'}/>
                </div>
                <div>
                    { user.followed
                        ? <button onClick={ () => { props.unfollow(user.id) } }>Unfollow</button>
                        : <button onClick={ () => { props.follow(user.id) } }>Follow</button> }
                </div>
            </span>
            <span>
                <span>
                    <div>{user.fullName}</div>
                    <div>{user.status}</div>
                </span>
                <span>
                    <div>{user.location.country}</div>
                    <div>{user.location.city}</div>
                </span>
            </span>
        </div>)
        }
        </div>
};

export default Users;