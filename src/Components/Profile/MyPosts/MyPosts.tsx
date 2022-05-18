import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post'
import {PostType} from "../../../Redux/store";

type MyPostsType = {
    posts: Array<PostType>
    newPostText: string,
    addPost: () => void,
    updateNewPostText: (newText: string) => void,
}

const MyPosts: React.FC<MyPostsType> = (props) => {

    let postsElements = props.posts.map(p => <Post post={p.message} likesCount={p.likesCount}/>);

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let addPostHandler = () => {
        props.addPost();
    }

    let postOnChange = () => {
        if (newPostElement.current) {
            props.updateNewPostText(newPostElement.current.value);
        }
    };

    return (
        <div>
            My posts
            <div>
                <textarea
                    placeholder='Enter new post'
                    ref={newPostElement}
                    onChange={postOnChange}
                    value={props.newPostText}
                />
            </div>
            <div>
                <button onClick={addPostHandler}>Add post</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;