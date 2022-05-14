import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post'
import state from "../../../Redux/state";

type MyPostsType = {
    message: string
}

const MyPosts: React.FC<MyPostsType> = () => {

    let postsElements = state.profilePage.posts.map( p => <Post message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let addPost = () => {
        if (newPostElement.current) {
            alert(newPostElement.current.value)
        }
    }

    return (
        <div>
            My posts
            <div>
                <textarea ref={newPostElement}></textarea>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={s.posts}>
                { postsElements }
            </div>
        </div>
    )
}

export default MyPosts;