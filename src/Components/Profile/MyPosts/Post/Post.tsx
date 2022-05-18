import React from 'react';
import s from './Post.module.css';

type MessageType = {
    post: string,
    likesCount: number
}

const Post = (props: MessageType) => {
    return (
        <div className={s.item}>
            <img src='https://cspromogame.ru//storage/upload_images/avatars/3981.jpg' alt=''/>
            {props.post}
            <div>
                <span>like</span> {props.likesCount}
            </div>
        </div>
    )
}

export default Post;