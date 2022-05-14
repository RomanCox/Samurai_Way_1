import React from 'react';
import s from './Post.module.css';

type MessageType = {
    message: string,
    likesCount: number
}

const Post = (props: MessageType) => {
    return (
        <div className={s.item}>
            <img src='https://cspromogame.ru//storage/upload_images/avatars/3981.jpg' alt=''/>
            {props.message}
            <div>
                <span>like</span> {props.likesCount}
            </div>
        </div>
    )
}

export default Post;