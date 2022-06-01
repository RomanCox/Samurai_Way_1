import React from 'react';
import {addPost, updateNewPostText} from "../../../Redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../Redux/reduxStore";
import {PostType} from "../../../Redux/profileReducer";

type mapStateToPropsType = {
    posts: Array<PostType>,
    newPostText: string,
};

type mapDispatchToPropsType = {
    addPost: () => void,
    updateNewPostText: (newText: string) => void,
};

export type MyPostsPropsType = mapStateToPropsType & mapDispatchToPropsType;

let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
    }
};

const MyPostsContainer = connect(mapStateToProps, {addPost, updateNewPostText})(MyPosts);

export default MyPostsContainer;