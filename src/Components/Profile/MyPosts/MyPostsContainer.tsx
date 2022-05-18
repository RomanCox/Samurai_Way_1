import React from 'react';
import {RootStoreType} from "../../../Redux/store";
import {addPostAC, updateNewPostTextAC} from "../../../Redux/profileReducer";
import MyPosts from "./MyPosts";

type MyPostsContainerType = {
    store: RootStoreType,
}

const MyPostsContainer: React.FC<MyPostsContainerType> = (props) => {

    let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch(addPostAC());
    }

    let postOnChange = (newText: string) => {
            props.store.dispatch(updateNewPostTextAC(newText));
    };

    return (<MyPosts
        updateNewPostText={postOnChange}
        addPost={addPost}
        posts={state.profilePage.posts}
        newPostText={state.profilePage.newPostText}
    />)
}

export default MyPostsContainer;