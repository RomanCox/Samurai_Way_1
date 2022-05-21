import React from 'react';
import {addPostAC, updateNewPostTextAC} from "../../../Redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../Redux/reduxStore";
import { Dispatch } from 'redux';
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

let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        addPost: () => {
            dispatch(addPostAC())
        },
        updateNewPostText: (newText: string) => {
            dispatch(updateNewPostTextAC(newText))
        },
    }
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;